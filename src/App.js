import React from 'react';
import { connect } from 'react-redux';
import Grid from './Grid';

const Trailer = ({ data }) => (
  <a href={ data.url }
     target="_blank"
     rel="noopener noreferrer">
    trailer...
  </a>
);

const config = [
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
  {
    title: 'trailer',
    field: 'Trailer',
    component: Trailer
  }
];

const App = ({ data }) => (
  <div>
    <Grid config={ config } data={ data } />
  </div>
);

const mapStateToProps = state => ({
  data: state.movies
});

export default connect(mapStateToProps)(App);
