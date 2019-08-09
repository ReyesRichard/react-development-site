import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './stylesheets/main.scss';
import Home from './containers/Home'
import Blog from './containers/blog'
import Header from './components/Header'
import Footer from './components/Footer'

// function Index() {
//   return <h2>Home</h2>;
// }

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
function Shop() {
  return <h2>Shop</h2>;
}

let Contact =  (props) => (
  <div>
    <h2>Contact</h2>
    <p> Bienvenido {props.name}</p>
  </div>
)
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       <code>src/App.js</code>
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Leer más
    //     </a>
    //   </header>

      <Router>
        <div>
          
          <Header />
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
            <Route path="/shop/" component={Shop} />
            <Route path="/blog/" component={Blog} />
            <Route path="/contact/" render={(props) => <Contact {...props} name='Juan' />}  />
          </div>
          <Footer /> 
        
        </div>

      </Router>

  );
}

export default App;
