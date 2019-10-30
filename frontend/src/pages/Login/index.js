import React, { useState } from "react";
import api from "../../services/api";

export default function Login({history}) {
  
  //utilizando o stado do rreact
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    
    //var que recebe resposta da requisição assincrona
    const response = await api.post("/sessions", { email });

    const { _id } = response.data;

    localStorage.setItem("user", _id);

    // este objeto que pegamos ajuda a fazer a navegação
    history.push('/dashboard'); 
  }
  // Aqui abaixo a componentização da página 
  
    return (
        
        <>
            <p>
                Ofereça <strong> spots </strong> para os programadores e encontre
                <strong> talentos </strong> para sua empresa
                </p>
                <form onSubmit={handleSubmit}>
                <label htmlFor="email"> E - MAIL * </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Seu Melhor E-mail"
                    value ={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <button className="btn" type="submit">
                    
                    Entrar
                </button>
                </form>
            </>
  );
}
