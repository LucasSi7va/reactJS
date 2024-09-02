import React, { useState, useEffect } from 'react';
export default function Api1() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
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
  
    return (
      <main>
        <h1>Exercício 9</h1>
        <h2>Produtos da API</h2>
        {error ? (
          <div>Erro: {error}</div>
        ) : (
          <ul>
            {data.map((product) => (
              <li className='api' key={product.id}>
                <img src={product.image} alt={product.title} style={{ maxWidth: '200px', height: 'auto' }} /> <br></br>
                <strong>{product.title}</strong>:  {product.description}
              </li>
            ))}
          </ul>
        )}
      </main>
    );
}
