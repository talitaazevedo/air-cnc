
//import {createAppContainer, createSwitchNavigator} from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";


import Login from './pages/Login';
import Book from './pages/Book';
import List from  './pages/List';

// createAppConatiner => Vai por fora
//createSwitchNavigator => vai por dentro
//Depois fazer os imports das paginas 
const Routes = createAppContainer(
  //=>
  createSwitchNavigator({
    //=> imports das páginas
    Login,
    Book, 
    List })
);

//No final export as Routes

export default Routes;

//Importar dentro do App.js