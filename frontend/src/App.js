import React from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import Routes from "./routes";

function App() {
//o app função principal busca dentro de routes os diretorios para evitar de ficar carregando a pagina


  
  return (
    <div className="container">
      <img src={logo} alt="AirCnc" />
      <div className="content">
        
        <Routes />
       
      </div>
    </div>
  );
}

export default App;
