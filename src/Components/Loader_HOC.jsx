import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default ComponentToRender => {
  class WithLoader extends Component {
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
  }

  WithLoader.propTypes = {
    loadingImage: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    name: PropTypes.string,
  };

  WithLoader.defaultProps = {
    name: '',
  };

  return WithLoader;
};
