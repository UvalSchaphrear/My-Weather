// import axios from "axios";

import { storageService } from '../services/async.storage.service.js'

const axios = require('axios')

const STORAGE_KEY = 'autoCompleteDB'
const API_KEY = 'jnCgaauIzZFjYPVkdKQvhvXwQA8AfLEk'



export const forecastService = {
    getLocations,
    getForecast,
    getByKey

}

async function getByKey(cityKey) {
    let city = await storageService.get(STORAGE_KEY, cityKey)
    return city
}



async function getLocations(searchLetters) {
    try {

        let locations = await storageService.query(STORAGE_KEY)

        let filteredLocs = locations.filter(location => {
            let inputCity = searchLetters.toUpperCase()
            let dataCity = location.LocalizedName.toUpperCase()
            if (dataCity.startsWith(inputCity)) return location
        })

        if (!filteredLocs.length) {
            const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${searchLetters}
            `)

            filteredLocs = res.data
            let locsToSave = filteredLocs.concat(locations)
            localStorage.setItem(STORAGE_KEY, JSON.stringify(locsToSave))
        }

        return filteredLocs

    } catch (err) {
        console.log('Error getting location:', err);
    }
}

async function getForecast(locationKey) {
    try {
        const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey.Key}?metric=true&apikey=${API_KEY}`)
        const forecast = res.data
        return forecast.DailyForecasts

    } catch (err) {
        console.log('Error getting Location key');
    }
}

