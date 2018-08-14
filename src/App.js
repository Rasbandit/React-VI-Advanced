import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import Swapi from "./Components/Swapi";
import Poke from "./Components/Poke";
import LoaderRP from './Components/Loader_render';
import withLoader from "./Components/Loader_HOC";

import Carousel from './Components/ChildProps';

import './App.css';

let SwapiWithLoader = withLoader(Swapi);
let PokeWithLoader = withLoader(Poke);

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
      swapi: [],
      swapiInput: '',
      pokeInput: ''
    }
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/people/')
      .then(({data: {results: swapi}}) => {
        setTimeout(() => {
          this.setState({swapi})
        }, 4000);
      })
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(({data: {results: pokemon}}) => {
      setTimeout(() => {
        pokemon = pokemon.splice(0,10)
        this.setState({pokemon})
      }, 2300);
    })
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section>
          <div className="column">
            <input
            name="swapiInput"
            value={this.state.swapiInput}
            onChange={this.handleChange}
            />
            <LoaderRP
              data={this.state.swapi}
              name={this.state.swapiInput}
              loaderImage="https://laughingsquid.com/wp-content/uploads/Star-Wars.gif"
              render={(props) => <Swapi data={props} /> }
            />
            <SwapiWithLoader
            data={this.state.swapi}
            name={this.state.swapiInput}
            loadingImage='https://laughingsquid.com/wp-content/uploads/Star-Wars.gif'
            />
          </div>
          <div className="column">
            <input
            name="pokeInput"
            value={this.state.pokeInput}
            onChange={this.handleChange}
            />
            <LoaderRP
            data={this.state.pokemon}
            name={this.state.pokeInput}
            loaderImage="https://i.pinimg.com/originals/9f/b1/25/9fb125f1fedc8cc62ab5b20699ebd87d.gif"
            render={(props) => <Poke data={props} /> }
            />
            <PokeWithLoader
            data={this.state.pokemon}
            name={this.state.pokeInput}
            loadingImage='https://i.pinimg.com/originals/9f/b1/25/9fb125f1fedc8cc62ab5b20699ebd87d.gif'
            />
          </div>
          <div>
            <Carousel>
              <img src="https://i.imgur.com/qtaXiHf.jpg" />
              <img src="https://gifer.com/i/KcVP.gif" />
              <img src="https://i.pinimg.com/736x/27/27/e5/2727e5b4d1b915b15075441a0cf00cf5--soft-tacos-bravest-warriors.jpg" />
              <img src="https://orig00.deviantart.net/1a16/f/2013/145/d/8/d8820398030a7136719a253545b2dbcf-d66hh9n.jpg" />
            </Carousel>
          </div>
        </section>
      </div>
      );
    }
  }

  export default App;
