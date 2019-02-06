import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PagesRouter from './pages/PagesRouter';




class App extends React.Component {
  render() {
    return (
       <BrowserRouter>

       <div>
         <PagesRouter />
         
       </div>

       </BrowserRouter>
    );
  }
}

export default App;
