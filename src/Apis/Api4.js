import React, { useState, useEffect } from 'react';

export default function Api4() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userLoading, setUserLoading] = useState(false);
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/users/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na resposta da API');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); 
        setLoading(false);
      })
      .catch((error) => {
        setError("Não foi possível carregar a API");
        setLoading(false);
      });
  }, []);

  const handleUserClick = (userId) => {
    setUserLoading(true);
    fetch(`https://api.escuelajs.co/api/v1/users/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao carregar dados do usuário');
        }
        return response.json();
      })
      .then((userData) => {
        console.log(userData);
        setSelectedUser(userData);
        setUserLoading(false);
      })
      .catch((error) => {
        setError("Não foi possível carregar os dados do usuário");
        setUserLoading(false);
      });
  };



  if (loading) return <div>Carregando...</div>;

  return (
    <main>
      <h1>Lista de Usuários</h1>
      {loading ? (
        <p>Carregando usuários...</p>
      ) : error ? (
        <div>Erro: {error}</div>
      ) : (
        <ul>
          {data.map((users) => (
            <li
              key={users.id}
              onClick={() => handleUserClick(users.id)}
              style={{ cursor: 'pointer' }}
            >
              {users.name}
            </li>
          ))}
        </ul>
      )}

      {userLoading && <p>Carregando dados do usuário...</p>}

      {selectedUser && (
        <div>
          <h2>Detalhes do Usuário</h2>
          <p><strong>Nome:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <img src={selectedUser.avatar} alt={selectedUser.name} style={{ maxWidth: '200px', height: 'auto' }} />
        </div>
      )}
    </main>
  );
}