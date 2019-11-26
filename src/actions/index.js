import transformForecast from './../services/transformForecast';
import getWeatherUrlByCity from './../services/getWeatherUrlByCity';
import transformWeather from './../services/transformWeather';
import axios from 'axios';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload });

const apiKey = 'c8a105c04e5bb6b115839ae8b94abc18';
const BaseURL = 'https://api.openweathermap.org/data/2.5/forecast';

export const setSelectedCity = payload => {
    return (dispatch, getState) => {
        const url =`${BaseURL}?q=${payload}&appId=${apiKey}`;

        dispatch(setCity(payload));
        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;
        const now = new Date();

        if (date && (now - date) < 1 * 60 * 1000) {
            return; 
        }

        return axios.get(url)
        .then(resolve => {
            return resolve.data;
        }).then(info => {
            const forecastData = transformForecast(info);
            dispatch(setForecastData({city: payload, forecastData}));
        });
    };
};

export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            axios.get(getWeatherUrlByCity(city))
            .then(resolve => {
                return resolve.data;
            }).then(info => {
                const weather = transformWeather(info);
                dispatch(setWeatherCity({city, weather}));
            });
        });
    }
}; 