// import axios from "axios";

import { utilService } from './utils.service.js'

const axios = require('axios')

const STORAGE_KEY = 'cityDB'
const localStorage = require('./storage.service.js')
const API_KEY = '7JVwQgB0DvwFO3a4zT7CgeY93aULk1nN'

const gCities = [
    {
        "Version": 1,
        "Key": "226396",
        "Type": "City",
        "Rank": 10,
        "LocalizedName": "Tokyo",
        "Country": {
            "ID": "JP",
            "LocalizedName": "Japan"
        },
        "AdministrativeArea": {
            "ID": "13",
            "LocalizedName": "Tokyo"
        }
    },
    {
        "Version": 1,
        "Key": "106770",
        "Type": "City",
        "Rank": 11,
        "LocalizedName": "Taiyuan",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "SX",
            "LocalizedName": "Shanxi"
        }
    },
    {
        "Version": 1,
        "Key": "106780",
        "Type": "City",
        "Rank": 11,
        "LocalizedName": "Tianjin",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "TJ",
            "LocalizedName": "Tianjin"
        }
    },
    {
        "Version": 1,
        "Key": "58491",
        "Type": "City",
        "Rank": 13,
        "LocalizedName": "Tongren",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "GZ",
            "LocalizedName": "Guizhou"
        }
    },
    {
        "Version": 1,
        "Key": "102324",
        "Type": "City",
        "Rank": 13,
        "LocalizedName": "Tangshan",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "HE",
            "LocalizedName": "Hebei"
        }
    },
    {
        "Version": 1,
        "Key": "59573",
        "Type": "City",
        "Rank": 13,
        "LocalizedName": "Taizhou",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "JS",
            "LocalizedName": "Jiangsu"
        }
    },
    {
        "Version": 1,
        "Key": "60198",
        "Type": "City",
        "Rank": 13,
        "LocalizedName": "Tongliao",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "NM",
            "LocalizedName": "Inner Mongolia"
        }
    },
    {
        "Version": 1,
        "Key": "106571",
        "Type": "City",
        "Rank": 13,
        "LocalizedName": "Tai'an",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "SD",
            "LocalizedName": "Shandong"
        }
    },
    {
        "Version": 1,
        "Key": "58055",
        "Type": "City",
        "Rank": 15,
        "LocalizedName": "Tianshui",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "GS",
            "LocalizedName": "Gansu"
        }
    },
    {
        "Version": 1,
        "Key": "2333653",
        "Type": "City",
        "Rank": 15,
        "LocalizedName": "Taizhou",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "ZJ",
            "LocalizedName": "Zhejiang"
        }
    }
]



const gForecasts = {
    "Headline": {
        "EffectiveDate": "2022-02-27T07:00:00+09:00",
        "EffectiveEpochDate": 1645912800,
        "Severity": 4,
        "Text": "Pleasant Sunday",
        "Category": "mild",
        "EndDate": null,
        "EndEpochDate": null,
        "MobileLink": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?unit=c&lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2022-02-22T07:00:00+09:00",
            "EpochDate": 1645480800,
            "Temperature": {
                "Minimum": {
                    "Value": 0.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 8.3,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 13,
                "IconPhrase": "Mostly cloudy w/ showers",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=1&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=1&unit=c&lang=en-us"
        },
        {
            "Date": "2022-02-23T07:00:00+09:00",
            "EpochDate": 1645567200,
            "Temperature": {
                "Minimum": {
                    "Value": 1.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 8.9,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 6,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 38,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=2&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=2&unit=c&lang=en-us"
        },
        {
            "Date": "2022-02-24T07:00:00+09:00",
            "EpochDate": 1645653600,
            "Temperature": {
                "Minimum": {
                    "Value": 0.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 9,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 6,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 33,
                "IconPhrase": "Clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=3&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=3&unit=c&lang=en-us"
        },
        {
            "Date": "2022-02-25T07:00:00+09:00",
            "EpochDate": 1645740000,
            "Temperature": {
                "Minimum": {
                    "Value": 1.8,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 11.1,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 33,
                "IconPhrase": "Clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=4&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=4&unit=c&lang=en-us"
        },
        {
            "Date": "2022-02-26T07:00:00+09:00",
            "EpochDate": 1645826400,
            "Temperature": {
                "Minimum": {
                    "Value": 4.2,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 12.2,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 3,
                "IconPhrase": "Partly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=5&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=5&unit=c&lang=en-us"
        }
    ]
}

export const forecastService = {
    getLocations,
    getForecast,
    getByKey

}

async function getByKey(cityKey) {

    return gCities.find(city => city.Key === cityKey)
}



async function getLocations(searchLetters) {
    try {
        // const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${location}
        // `)
        // const locations = res.data
        // return locations

        //Changing input to always start a capital letter
        // let searchCity = searchLetters.charAt(0).toUpperCase() + searchLetters.substring(1).toLowerCase()
        // return gCities.filter(city => city.LocalizedName.startsWith(searchCity))

        //Changing both input and data into capital letters
        return gCities.filter(city => {
            let inputCity = searchLetters.toUpperCase()
            let dataCity = city.LocalizedName.toUpperCase()
            if (dataCity.startsWith(inputCity)) return city.LocalizedName
        })

    } catch (err) {
        console.log('Error getting location:', err);
    }
}

async function getForecast(locationKey) {
    try {
        // const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`)
        // const forecast = res.data
        // console.log(forecast);
        // return forecast
        // console.log(locationKey);
        // return utilService.getDay(gForecasts.DailyForecasts[0].EpochDate)
        return gForecasts.DailyForecasts

    } catch (err) {
        console.log('Error getting Location key');
    }
}

