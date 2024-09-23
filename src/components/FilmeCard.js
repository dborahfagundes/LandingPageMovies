import React from 'react';
import './FilmeCard.css';

const FilmeCard = ({ filme }) => {
  const getImagemPath = (imagemNome) => {
    return `/images/${imagemNome}`;
  };

  return (
    <div className="filme-card">
      {filme.imagem ? (
        <img 
          src={getImagemPath(filme.imagem)} 
          alt={filme.titulo} 
          className="filme-poster" 
        />
      ) : (
        <div className="placeholder">Imagem não disponível</div>
      )}
      <h3>{filme.titulo}</h3>
      <p><strong>Diretor:</strong> {filme.diretor}</p>
      <p><strong>Ano:</strong> {filme.ano}</p>
    </div>
  );
};

export default FilmeCard;
