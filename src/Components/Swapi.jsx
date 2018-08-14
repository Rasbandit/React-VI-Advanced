import React from 'react';
import PropTypes from 'prop-types';

const Swapi = ({ data }) => {
  const PEOPLE = data.map(person => (
    <h2 key={person.name}>Name: {person.name}</h2>
  ))
  return <div>{PEOPLE}</div>;
}

Swapi.propTypes = {
  data: PropTypes.array.isRequired,
  name: PropTypes.string
}

export default Swapi;
