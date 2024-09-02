import React, { useState, useEffect } from 'react';


const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products/');
    if (!response.ok) {
      throw new Error('Erro na resposta da API');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default function Api1() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const products = await fetchProducts();
      if (products) {
        setData(products); 
      } else {
        setError('Não foi possível carregar os dados da API.');
      }
      setLoading(false);
    };

    getProducts();
  }, []);
// exercicio 12
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <main>
      <h1>Exercício 11</h1>
      <h2>Produtos da API</h2>
      <ul>
        {data.map((product) => (
          <li className='api' key={product.id}>
            <img src={product.image} alt={product.title} style={{ maxWidth: '200px', height: 'auto' }} />
            <strong>{product.title}</strong>: {product.description}
          </li>
        ))}
      </ul>
    </main>
  );
}
