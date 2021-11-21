import React from 'react';
import Grid from './Grid';
import movies from './data_a';
import pokemon from './data_b';

const Trailer = ({ data }) => (
  <a href={data.url}
     target="_blank"
     rel="noopener noreferrer">
    trailer...
  </a>
);

const PokemonName = ({ data }) => <span style={{ textTransform: 'capitalize' }}>{data}</span>;

const moviesConfig = [
  {
    title: 'id',
    field: 'imdbID'
  },
  {
    title: 'title',
    field: 'Title'
  },
  {
    title: 'rating',
    field: 'imdbRating',
  },
 // {
 //   title: 'trailer',
 //   field: 'Trailer',
 //   component: Trailer
 // }
];

const pokemonConfig = [
  {
    title: 'pokedex #',
    field: 'number'
  },
  // {
  //   title: 'name',
  //   field: 'name',
  //   component: PokemonName
  // },
];

const App = () => (
  <div>
    <h2>Movies</h2>
    <Grid config={moviesConfig} data={movies} />

    <h2>Pokemon</h2>
    <Grid config={pokemonConfig} data={pokemon} />
  </div>
);

export default App;
