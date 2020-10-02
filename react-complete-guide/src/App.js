import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Niclas', age: 30 },
      { name: 'Herman', age: 27 },
      { name: 'Sebastian', age: 32 }
    ],
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Nico';
    setPersonsState({
      persons: [
        { name: newName, age: 413 },
        { name: 'Hentai-Kun', age: 80085 },
        { name: 'Sebastian-senpai', age: 1337 }
      ],
      otherState: personsState.otherState
    });
  }

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Vim-Sama!', age: 413 },
        { name: event.target.value, age: 80085 },
        { name: 'Sebastian-senpai', age: 1337 }
      ],
      otherState: personsState.otherState
    });
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button 
        style={style}
        onClick={() => switchNameHandler('Vim-Dono!!')}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        click={switchNameHandler.bind('Nico!')}>
        Har Rövgänget under uppsikt aka chiefen
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        changed={nameChangedHandler}>
        Utvecklare för Rövänget
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}>
        Teknisk specialist och utvecklare för Rövgänget
      </Person>
    </div>
  );
}

export default app;