import React, { Component } from 'react';

export default ComponentToRender =>
  class extends Component {
    filterItems(array, name) {
      return array.filter(person => person.name.toLowerCase().includes(name.toLowerCase()));
    }

    render() {
      const { loadingImage, data, name } = this.props;
      const remaining = this.filterItems(data, name);
      return (
        <div>
          {this.props.data.length ? (
            <ComponentToRender data={remaining} />
          ) : (
            <figure>
              <img src={loadingImage} alt="Loading..." />
            </figure>
          )}
        </div>
      );
    }
  };
