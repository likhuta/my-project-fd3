import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PagesRouter from './pages/PagesRouter';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import shopApp from './reducers'
let store = createStore(shopApp)



class App extends React.Component {
  render() {
    return (
      <Provider  store={store}> 
       <BrowserRouter>

         <div>
           <PagesRouter />
         
         </div>

         </BrowserRouter>
       </Provider>
    );
  }
}

export default App;
