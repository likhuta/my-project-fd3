import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './hoc/layout/Layout'

import Main from './components/Main';
import Category from './components/Category';
import Contact from './components/Contact';
import PersonalCabinet from './components/PersonalCabinet';
import CardProduct from './components/CardProduct';


let routes=(
  <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/category/:name/:id" component={Category } />
      <Route path="/product/:name/:id" component={CardProduct} />
      <Route path="/contact" component={Contact} />
      <Route path="/personalCabinet" component={PersonalCabinet} />

  </Switch>

)
class App extends React.Component {
  render() {
    return (
   <Layout>
        <Header />
        {routes}
        <Footer />
   </Layout>
      
    
    );
  }
}

export default App;
