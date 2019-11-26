import { BaseURL, apiKey } from './../constants/api_urls';
const getWeatherUrlByCity = city => {
    console.log(city);
    return  `${BaseURL}?q=${city}&appid=${apiKey}`;
}
export default getWeatherUrlByCity;