import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'


class App extends Component {
  state = {

  }
  render(){
    return (
      <>
      <NavBar /> 
      <section> Home View </section>
      <section> 2nd View</section>
      <Footer />
      </>
    );
  }
}

export default App;
