
import React,{useState, useEffect} from "react";
import { SafeAreaView, ScrollView,AsyncStorage, StyleSheet,Text,Image } from "react-native";
//Importando aqui posso usar o componente ==>
import SpotList from '../components/SpotList';


import logo from '../assets/logo.png';
export default function List() {
  //inicializando o useState com Arr vazio
  const [techs,setTechs] = useState([]);
  
  //está função é executada quando a página aé aberta
  useEffect(()=>{
    //=> busque tecchs no storage local 
    //==>
    AsyncStorage.getItem('techs').then(storagedTechs => {
      //Convertendo para array
      const techArray = storagedTechs.split(',').map(tech => tech.trim()); //.map(tech => tech.trim()) <== percorre o array e elimina os espaços
      setTechs(techArray);
    });

  },[]);




  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />
        <ScrollView>
          {//percorre o objeto techs e para cada tec cria um componente spot a chave é o proprio tech
            techs.map(tech => (          <SpotList key={tech} tech={tech} />        ))}
        </ScrollView>
    </SafeAreaView>
  );
}


const styles  = StyleSheet.create({
  conatiner: {
    flex:1,
  },
  logo:{
    height:32,
    resizeMode:'contain',
    alignSelf:'center',
    marginTop:10,

  },

})