import { Route } from 'react-router-dom';
import './App.css';
// import Categories from './componets/Categories';

import { Header } from './componets'
import {Home,Cart}  from "./pages"
// import  Header ----вместо Header м.б. любой название




function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content"> 
        <Route path="/" component={Home} exact/>
        <Route path="/cart" component={Cart} exact/>

      </div>
    </div>



  );
}

export default App;
