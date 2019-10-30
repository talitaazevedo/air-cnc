
import React from'react';
// importante e muito legal utilizar esta dependencia  ela auxilia na criação de routas para fatiar o layout
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from "./pages/Dashboard";
import New from "./pages/New";

export default function Routes(){
    return (
      //primeiro
      <BrowserRouter>
      
          <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard"  component={Dashboard} />
                <Route path="/new"  component={New} />
          </Switch>
      </BrowserRouter>
    );
}