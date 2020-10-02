import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = {
  persons: [
    { name: 'Niclas', age: 30 },
    { name: 'Herman', age: 27 },
    { name: 'Sebastian', age: 32}
  ]
}

  render() {
    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <button>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Har Rövgänget under uppsikt aka chiefen</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Utvecklare för Rövänget</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Teknisk specialist och utvecklare för Rövgänget</Person>
      </div>
    );
  }
}

export default App;
