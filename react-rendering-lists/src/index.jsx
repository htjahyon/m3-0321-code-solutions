import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function List(props) {
  const list = props.list;
  const listItems = list.map(x =>
     <li key={x.number}>{x.name}</li>);
  return (
    <ul>{listItems}</ul>
  );
}

ReactDOM.render(
  <List list={pokedex} />,
  document.querySelector('#root')
);
