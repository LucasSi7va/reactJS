import React, { useState, useEffect } from 'react';
export default function Api5() {
    const [dados, setDados] = useState([]);
  const [selecionado, setSelecionado] = useState('');

  useEffect(() => {
    // Substitua esta URL pela URL da API pública que você está utilizando
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(response => response.json())
      .then(data => {
        setDados(data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, []);

  const handleChange = (event) => {
    const itemSelecionado = dados.find(item => item.id === event.target.value);
    setSelecionado(itemSelecionado);
  };




  return (
    <div>
      <select value={selecionado} onChange={handleChange}>
        <option value="">Selecione uma opção</option>
        {dados.map((categories) => (
          <option key={categories.id} value={categories.id}>
            {categories.name}
          </option>
        ))}



      </select>
    </div>
  );
};

