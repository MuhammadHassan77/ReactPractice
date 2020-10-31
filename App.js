import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { render } from '@testing-library/react';

class Navbar extends React.Component {
  render() {
    return (
      <div style={{"backgroundColor":"cyan"}}>
        <h1 style={{ "color": "blue","bachgroundColor":"cyan" }}>Navbar</h1>
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ "color": "red" }}>Header</h1>
      </div>
    )
  }
}
class Footer extends React.Component {
  render() {
    return (
      <div>
        <h1>Footer</h1>
      </div>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <h1>Hello World</h1>
        <Footer />
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Hello World
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
