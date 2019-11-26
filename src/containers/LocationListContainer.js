import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LocationList from './../components/locationList';
import { getWeatherCities, getCity } from './../reducers';
import * as actions from './../actions';

class LocationListContainer extends Component {
    componentDidMount() {
        const {setWeather, setSelectedCity, cities, city} = this.props;
        setWeather(cities);
        setSelectedCity(city);
    }
    // ForecastExtendedContainer
    handleSelectionLocation = city => {
        this.props.setSelectedCity(city);
      };

    render() {
        return (
            <LocationList cities = { this.props.citiesWeather }
                onSelectedLocation = {this.handleSelectionLocation}>
            </LocationList>
        )
    }
}
LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
  const mapStateToProps = state =>({
      citiesWeather: getWeatherCities(state),
      city: getCity(state)
   });
  export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);