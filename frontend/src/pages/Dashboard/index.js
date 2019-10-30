import React,{useEffect, useState} from "react";
import socketio from 'socket.io-client';
// importa a lib de link muito bom 
import {Link} from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

export default function Dashboard() {
  const [spots, setSpots] = useState([]);

//=> conexão com websockets
  useEffect(() => {
    const user_id = localStorage.getItem("user");
    const socket = socketio('http://localhost:3333',{query:{ user_id },});
    

   
  }, []);




  useEffect(() => {
      //carrega spots
      async function loadSpots(){
        const user_id = localStorage.getItem('user');
        const response = await api.get('/dashboard', { 
          headers:{user_id}
        });
        setSpots(response.data);

      }
      loadSpots();
      // o array vazio indica que a pesquisa será feita apenas uma vez 
    },[]);
  return (
    //<> é necessário no react quando se tem mais de ddois componentes criados de uma vez
    <>
      <ul className="spot-list">
        {spots.map(spot => (
          <li key="spot._id">
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R$${spot.price}/dia` : "GRATUITO"}</span>
          </li>
        ))}
      </ul>
      <Link to="/new">
        <button className="btn">Cadastrar novo Spot</button>
      </Link>
    </>
  );
}
