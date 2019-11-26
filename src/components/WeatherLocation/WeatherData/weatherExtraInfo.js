import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className='weatherExtraInfoCont'>
        <span className='extraInfoText' >{`Humidity: ${humidity} %`}</span>
        <span className='extraInfoText' >{`Wind: ${wind} km/h`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
};

export default WeatherExtraInfo;