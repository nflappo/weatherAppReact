import { SUN, THUNDER, DRIZZLE, SNOW, RAIN, CLOUD } from './../constants/weathers';
    
import convert from 'convert-units';

const getWeatherState = weather => {
    const { id } = weather;
    if (id < 300) {
        return THUNDER;
    } else if(id < 400) {
        return DRIZZLE;
    } else if (id < 600) {
        return RAIN;
    } else if (id < 700) {
        return SNOW;
    }
    else if (id === 800) {
        return SUN;
    } else {
        return CLOUD;
    }
};
const getTemperature = kelvinDegrees => {
    return parseFloat (convert(kelvinDegrees).from('K').to('C').toFixed(0));
};

const transformWeather = info_from_api => {
    const {humidity, temp} = info_from_api.main;
    const {speed} = info_from_api.wind;
    const weatherState = getWeatherState(info_from_api.weather[0]);
    const data = {
        humidity, 
        temperature: getTemperature(temp),
        weatherState,
        wind: speed
    };
    return data;
};
export default transformWeather;