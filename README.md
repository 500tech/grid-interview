Base project for Grid interview

## Installation

Clone this project and run `npm install` and afterwards `npm start`

## Task
Implement a generic grid component that can accept configuration and data and render a table accordingly.

In this project there are 3 main files:
### App.js

This file contains the configuration for the grid and renders the Grid component.

### data.js
This file contains the data which is used for this exercise, this is a list of IMDB top 100 movies.

### Grid.js
This is the grid component which currently renders a simple HTML table.
Your task is to implement this component so it renders the table with the IMDB movies according to the configuration provided.

Once you are done implementing the grid using the current config, uncomment the last column in the config (Trailer) and implement
the ability to render a custom react component for a table cell.

> 500Tech.com
