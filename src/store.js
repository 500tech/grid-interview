import { createStore } from 'redux';
import movies from './data';

const reducer = (state) => {
  return state;
};

const initialState = {
  movies
};

window.store = createStore(reducer, initialState);

export default window.store;