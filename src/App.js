import React, { Component } from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore} from
'redux';
import logger from 'redux-logger';
import logo from './logo.svg';
import data from './components/PIZZA/pizza.json'
import Layout from './components/Layout/Layout'
import './App.css';


class App extends Component {

  render() {
    let pizzas = data;


    return (
     <Layout>

       </Layout>
    );
  }
}

export default App;
