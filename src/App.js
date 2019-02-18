import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PagesRouter from './pages/PagesRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import HeaderCategory from './components/HeaderCategory';


import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import shopApp from './reducers'
let store = createStore(shopApp, applyMiddleware(thunkMiddleware))
let categories=[
  {name:'Электроника', id: 1},  {name:'Компьютеры и сети', id: 2}, {name:'Стройка и ремонт', id: 3},
  {name:'Дом и сад', id: 4}, {name:'Авто', id: 5}, {name:'Спорт', id: 6}, {name:'Работа и офис', id: 7},


]
// let categories=['Электроника', 'Компьютеры и сети','Стройка и ремонт','Дом и сад','Авто','Спорт','Работа и офис']


class App extends React.Component {
  render() {
    return (
      <Provider  store={store}> 
      

         <div>
           <Header  >
             </Header>
             <HeaderCategory categories={categories}> </HeaderCategory>

           <BrowserRouter>
           <PagesRouter  />
           </BrowserRouter>
         <Footer />
         </div>

       
       </Provider>
    );
  }
}

export default App;
