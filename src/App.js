import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './hoc/layout/Layout'

import Main from './components/Main';
import Category from './components/Category';
import Contact from './components/Contact';
import PersonalCabinet from './components/PersonalCabinet';
import CardProduct from './components/CardProduct';
import fetch from 'isomorphic-fetch'
import Loader from './components/Loader'
import {connect} from 'react-redux';
import {getAxiosInfo} from './store/action/shopInfo'

class App extends React.Component {
  componentDidMount(){
    console.log('APP')
    this.props.getAxiosInfo()
  }

  render() {
    let routes=(
  
      <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/category/:name/:id"  component={Category } />
          <Route path="/product/:name/:id" component={CardProduct} />
          <Route path="/contact" component={Contact} />
          <Route path="/personalCabinet" component={PersonalCabinet} />
          <Redirect to="/" />
    
    
      </Switch>
    )
    if (!this.props.stateApp.isLogin) {
      routes = (
        <Switch>
        <Route path="/" exact component={Main} />
          <Route path="/category/:name/:id"  component={Category } />
          <Route path="/product/:name/:id" component={CardProduct} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      )
    }
    
    
    
    return (
   <Layout>
        <Header />
      {  (this.props.dataShop.isLoading)
       ? <Loader/>
       : routes }
        <Footer />
   </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
   dataShop:state.dataShop,
   stateApp:state.stateApp

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  getAxiosInfo:()=>dispatch(getAxiosInfo())
  }
}

export default withRouter (connect (mapStateToProps,mapDispatchToProps ) (App));
