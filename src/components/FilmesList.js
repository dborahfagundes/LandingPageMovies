import React, { useEffect, useState } from "react";
import axios from "axios";
import FilmeCard from "./FilmeCard";
import "./FilmesList.css";

const FilmesList = () => {
  const [filmes, setFilmes] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [diretor, setDiretor] = useState("");
  const [ano, setAno] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchFilmes();
  }, []);

  const fetchFilmes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/filmes");
      setFilmes(response.data);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      const filmesExemplo = [
        { id: 1, titulo: "Bacurau", diretor: "Kleber Mendonça Filho", ano: 2019, imagem: "bacurau.jpg" },
        { id: 2, titulo: "Central do Brasil", diretor: "Walter Carvalho", ano: 1998, imagem: "central_do_brasil.jpg" },
      ];
      setFilmes(filmesExemplo);
    }
  };
  
  const addFilme = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/filmes", {
        titulo,
        diretor,
        ano,
      });
      setFilmes([...filmes, response.data]);
      resetForm();
    } catch (error) {
      console.error("Erro ao adicionar filme:", error);
    }
  };

  const updateFilme = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/filmes/${editingId}`,
        {
          titulo,
          diretor,
          ano,
        }
      );
      const updatedFilmes = filmes.map((filme) =>
        filme.id === editingId ? response.data : filme
      );
      setFilmes(updatedFilmes);
      resetForm();
    } catch (error) {
      console.error("Erro ao atualizar filme:", error);
    }
  };

  const deleteFilme = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/filmes/${id}`);
      setFilmes(filmes.filter((filme) => filme.id !== id));
    } catch (error) {
      console.error("Erro ao deletar filme:", error);
    }
  };

  const resetForm = () => {
    setTitulo("");
    setDiretor("");
    setAno("");
    setEditingId(null);
  };

  const handleEdit = (filme) => {
    setTitulo(filme.titulo);
    setDiretor(filme.diretor);
    setAno(filme.ano);
    setEditingId(filme.id);
  };

  return (
    <section className="filmes-list">
      <div className="filmes-container">
        {filmes.map((filme) => (
          <div key={filme.id} className="filme-card-wrapper">
            <FilmeCard filme={filme} />
            <div className="action-buttons">
              <button
                onClick={() => handleEdit(filme)}
                className="action-button"
              >
                Editar
              </button>
              <button
                onClick={() => deleteFilme(filme.id)}
                className="action-button"
              >
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="form-container">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Diretor"
          value={diretor}
          onChange={(e) => setDiretor(e.target.value)}
          className="form-input"
        />
        <input
          type="number"
          placeholder="Ano"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          className="form-input"
        />
        <button
          onClick={editingId ? updateFilme : addFilme}
          className="action-button"
        >
          {editingId ? "Atualizar Filme" : "Adicionar Filme"}
        </button>
      </div>
    </section>
  );
};

export default FilmesList;