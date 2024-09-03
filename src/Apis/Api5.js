import React, { useState, useEffect } from 'react';

export default function Api5() {
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
       
        const responseCategorias = await fetch('https://api.escuelajs.co/api/v1/categories');
        const dataCategorias = await responseCategorias.json();
        setCategorias(dataCategorias);

        
        if (categoriaSelecionada) {
          const responseProdutos = await fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoriaSelecionada}`);
          const dataProdutos = await responseProdutos.json();
          setProdutos(dataProdutos);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [categoriaSelecionada]);

  useEffect(() => {
    
    if (categoriaSelecionada) {
      const filtrados = produtos.filter(product => product.category.id === parseInt(categoriaSelecionada));
      setProdutosFiltrados(filtrados);
    } else {
      setProdutosFiltrados([]);
    }
  }, [produtos, categoriaSelecionada]);

  const handleChange = (event) => {
    setCategoriaSelecionada(event.target.value);
  };

  return (
    <div>
      <h1>exercicio15</h1>
      <select value={categoriaSelecionada} onChange={handleChange}>
        <option value="">Selecione uma opção</option>
        {categorias.map(categoria => (
          <option key={categoria.id} value={categoria.id}>
            {categoria.name}
          </option>
        ))}
      </select>

      <ul>
        {produtosFiltrados.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <strong>${product.price}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
