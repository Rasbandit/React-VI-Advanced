import React from 'react';

const LoaderRender = ({ loaderImage, render, data, name }) => {
  const remainingPeople = data.filter(person => person.name.toLowerCase().includes(name.toLowerCase()));

  return data.length ? (
    render(remainingPeople)
  ) : (
    <figure>
      <img src={loaderImage} alt="Loading..." />
    </figure>
  );
};

export default LoaderRender;
