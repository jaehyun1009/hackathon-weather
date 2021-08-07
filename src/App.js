import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import './App.css';
import About from './Pages/About'
import Home from './Pages/Home'
import WeatherResult from './Pages/WeatherResult'
import SpaceResult from './Pages/SpaceResult'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'


class App extends Component {
  state = {

  }
  render(){
    return (
      <>
      <NavBar /> 
      
        {/* <nav>
          <ul>
          <Link to="/">Home</Link><br/>
          <Link to="/about">About</Link>
          </ul>
        </nav> */}
        <header>
          React Weather CRUD
        </header>
        <section className='home-weather'> 
              <header>Insert weather clip</header> 

          </section> 

          <section className='home-space'>
              <header>Insert space  clip</header> 




            </section>


            <section className='home-space'>
              <header>Insert Section Header</header> 




            </section>
        
        <Route exact path='/about' render={() => 
          <About />
        }/>
        <Route exact path='/weather/' render={() => 
          <WeatherResult />
        }/>
        <Route exact path='/space' render={() => 
          <SpaceResult />
        }/>
        <Route exact path='/' render={() => 
          <Home />
        }/>

        <Footer />
      </>
    );
  }
}

export default App;
