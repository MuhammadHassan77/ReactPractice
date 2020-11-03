import React from 'react';
import './App.css';
// import AppRouter from './config/routers';
// import { Nav } from 'react-bootstrap';
// import Navbar from './components/navbar.jsx';
// import Todo from './components/todo.jsx';
// import logo from './logo.svg';
// import Calculator from './components/calculator.jsx';
import AzanCalendar from './components/aazanCalendar.jsx';


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <header className="App-header"> */}
        <div className="row">
          {/* <AppRouter /> */}
          <AzanCalendar  mon={1} />
          {/* <Calculator />
           <Todo />            */}
        </div>
        {/* <img src={logo} className="App-logo fluid" alt="logo" style={{"width":500}}/> */}
      {/* </header> */}
    </div>
  );
}

export default App;
