import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './weatherTemperature';
import WeatherExtraInfo from './weatherExtraInfo';
import './styles.css';

const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => {
    return (
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={temperature} weatherState={weatherState} />
        <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>);
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    }),
};

export default WeatherData;