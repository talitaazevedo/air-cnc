
//use state importa os metodos de estado do react
// use memo => importa uso dda memoria local auxilia a incluir preview de imagem
import React, {useState, useMemo} from 'react';
import camera from '../../assets/camera.svg';
import api from '../../services/api';
import './styles.css';
// history é utilizado para fazer navegação
export default function New({history}){

    const[company,setCompany] = useState('');
    const [techs, setTechs] = useState("");
    const [price, setPrice] = useState("");
    const [thumbnail, setThumbnail] = useState(null);


    // muito bom isso aqui usa useMEMO que retorna othumbnail se ele existir
    const preview = useMemo( () => {return thumbnail ? URL.createObjectURL(thumbnail) : null; }, [thumbnail]   );
    
    // envia dados para o mongodb
    async function handleSubmit(event){

      event.preventDefault();
      const data = new FormData();
      //pega o id ddo usuário salvo no local storage
      const user_id = localStorage.getItem('user');


      //pega os valores como filho
      data.append("thumbnail", thumbnail);
      data.append("techs", techs);
      data.append("price", price);
      data.append("company", company);
      //recebe os dados de configuraçao
      await api.post('/spots', data, { headers:{user_id}} );
      // te direrciona para a pagina de dashboard
      history.push('/dashboard');

    }
    
    return (
      //evento onsubmit{recebe function} 
      <form onSubmit={handleSubmit}>
          <label 
                id="thumbnail" 
                style={{backgroundImage:`url(${preview})`}}
                className = {thumbnail ? 'has-thumbnail' :''}
                >
              
              <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
              <img src={camera} alt="Selecione a imagem"/>
          </label>




        <label htmlFor="company">EMPRESA *</label>
        <input
          type="text"
          id="company"
          placeholder="Sua empresa Incrivel"
          value={company}
          onChange={event => setCompany(event.target.value)}
        />

        <label htmlFor="techs">
          TECNOLOGIAS *<span> (Separadas por virgula)</span>{" "}
        </label>
        <input
          type="text"
          id="techs"
          placeholder="Quais tecnologias usam?"
          value={techs}
          onChange={event => setTechs(event.target.value)}
        />

        <label htmlFor="price">
          VAOR DA DIÁRIA *<span> (Em branco para gratuito)</span>{" "}
        </label>
        <input
          type="text"
          id="price"
          placeholder="Valor cobrado por Dia?"
          value={price}
          onChange={event => setPrice(event.target.value)}
        />

        <button type="submit" className="btn">Cadastrar</button>
      </form>
    );
    
}