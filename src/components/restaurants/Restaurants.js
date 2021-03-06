import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        { this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} store={this.props.store}/>)}
      </ul>
    );
  }
};

export default Restaurants;