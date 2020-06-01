// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
    // Set common parameters for each request to the API.

    // TODO: Use your own APPID for OpenWeatherMap.org
    config.params.APPID = '8441d2dc2e861c8ac4dd5ee40217b71e';
    config.params.units = 'imperial';

    return config;
}, function (error) {
    return Promise.reject(error);
});