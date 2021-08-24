import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './scss/app.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

//<Route path="/" component ={App} />----если указать такой path то будет рендериться все приложение, т.е. компонента component ={App}
//<Route exact path="/" component ={App} />  -----exact означает что строго указан путь path="/" и только тогда будут будет рендер компонента component ={App}, если путь path="/" не указан то при exact рендера не будет!
//Route  всегда указывай внутри BrowserRouter !!!!!
//поскольку <App/>  мы обернули <BrowserRouter>, то теперь внутри  <App/> в файле App.js мы можем указывать <Route....



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
