import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Exercicio1 from './Apis/Api1';
import Exercicio2 from './Apis/Api2';
import Exercicio3 from './Apis/Api3';
import Exercicio4 from './Apis/Api4';
import Exercicio5 from './Apis/Api5';

export default function App() {
  const [palavraChave, setPalavraChave] = useState('');

  return (
    <Router>
      <main>
        <h1>Exercício 8</h1>
        <h2>Escreva palavra-chave: {palavraChave}</h2>
        <input
          type="text"
          value={palavraChave}
          onChange={(e) => setPalavraChave(e.target.value)}
        />

        <nav>
          <ul>
            <li><Link to="/Api1">Exercício 1</Link></li>
            <li><Link to="/Api2">Exercício 2</Link></li>
            <li><Link to="/Api3">Exercício 3</Link></li>
            <li><Link to="/Api4">Exercício 4</Link></li>
            <li><Link to="/Api5">Exercício 5</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/Api1" element={<Exercicio1 />} />
          <Route path="/Api2" element={<Exercicio2 />} />
          <Route path="/Api3" element={<Exercicio3 />} />
          <Route path="/Api4" element={<Exercicio4 />} />
          <Route path="/Api5" element={<Exercicio5 />} />
          
        </Routes>
      </main>
    </Router>
  );
}
