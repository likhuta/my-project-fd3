import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PagesRouter from './pages/PagesRouter';
import Header from './components/Header';
import Footer from './components/Footer';


import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import shopApp from './reducers'
let store = createStore(shopApp, applyMiddleware(thunkMiddleware))



class App extends React.Component {
  render() {
    return (
      <Provider  store={store}> 
       <BrowserRouter>

         <div>
           <Header/>
           <PagesRouter />
         <Footer/>
         </div>

         </BrowserRouter>
       </Provider>
    );
  }
}

export default App;
