// const gForecasts = [{
//     "Headline": {
//         "EffectiveDate": "2022-02-25T19:00:00+04:00",
//         "EffectiveEpochDate": 1645801200,
//         "Severity": 2,
//         "Text": "Expect rainy weather Friday evening through Saturday evening",
//         "Category": "rain",
//         "EndDate": "2022-02-27T01:00:00+04:00",
//         "EndEpochDate": 1645909200,
//         "MobileLink": "http://www.accuweather.com/en/ge/batumi/13/daily-weather-forecast/13?unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/ge/batumi/13/daily-weather-forecast/13?unit=c&lang=en-us"
//     },
//     "DailyForecasts": [
//         {
//             "Date": "2022-02-22T07:00:00+04:00",
//             "EpochDate": 1645498800,
//             "Sun": {
//                 "Rise": "2022-02-22T08:00:00+04:00",
//                 "EpochRise": 1645502400,
//                 "Set": "2022-02-22T18:55:00+04:00",
//                 "EpochSet": 1645541700
//             },
//             "Moon": {
//                 "Rise": "2022-02-22T00:08:00+04:00",
//                 "EpochRise": 1645474080,
//                 "Set": "2022-02-22T10:52:00+04:00",
//                 "EpochSet": 1645512720,
//                 "Phase": "WaningGibbous",
//                 "Age": 21
//             },
//             "Temperature": {
//                 "Minimum": {
//                     "Value": 11.6,
//                     "Unit": "C",
//                     "UnitType": 17
//                 },
//                 "Maximum": {
//                     "Value": 17.5,
//                     "Unit": "C",
//                     "UnitType": 17
//                 }
//             },
//             "RealFeelTemperature": {
//                 "Minimum": {
//                     "Value": 10.4,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Chilly"
//                 },
//                 "Maximum": {
//                     "Value": 18.2,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Pleasant"
//                 }
//             },
//             "RealFeelTemperatureShade": {
//                 "Minimum": {
//                     "Value": 10.4,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Chilly"
//                 },
//                 "Maximum": {
//                     "Value": 17,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Pleasant"
//                 }
//             },
//             "HoursOfSun": 10.9,
//             "DegreeDaySummary": {
//                 "Heating": {
//                     "Value": 3,
//                     "Unit": "C",
//                     "UnitType": 17
//                 },
//                 "Cooling": {
//                     "Value": 0,
//                     "Unit": "C",
//                     "UnitType": 17
//                 }
//             },
//             "AirAndPollen": [
//                 {
//                     "Name": "AirQuality",
//                     "Value": 0,
//                     "Category": "Good",
//                     "CategoryValue": 1,
//                     "Type": "Ozone"
//                 },
//                 {
//                     "Name": "Grass",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "Mold",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "Ragweed",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "Tree",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "UVIndex",
//                     "Value": 3,
//                     "Category": "Moderate",
//                     "CategoryValue": 2
//                 }
//             ],
//             "Day": {
//                 "Icon": 1,
//                 "IconPhrase": "Sunny",
//                 "HasPrecipitation": false,
//                 "ShortPhrase": "Sunny, nice and warm",
//                 "LongPhrase": "Nice and warm with plenty of sun",
//                 "PrecipitationProbability": 0,
//                 "ThunderstormProbability": 0,
//                 "RainProbability": 0,
//                 "SnowProbability": 0,
//                 "IceProbability": 0,
//                 "Wind": {
//                     "Speed": {
//                         "Value": 11.1,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 72,
//                         "Localized": "ENE",
//                         "English": "ENE"
//                     }
//                 },
//                 "WindGust": {
//                     "Speed": {
//                         "Value": 27.8,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 124,
//                         "Localized": "SE",
//                         "English": "SE"
//                     }
//                 },
//                 "TotalLiquid": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Rain": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Snow": {
//                     "Value": 0,
//                     "Unit": "cm",
//                     "UnitType": 4
//                 },
//                 "Ice": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "HoursOfPrecipitation": 0,
//                 "HoursOfRain": 0,
//                 "HoursOfSnow": 0,
//                 "HoursOfIce": 0,
//                 "CloudCover": 0,
//                 "Evapotranspiration": {
//                     "Value": 0.1,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "SolarIrradiance": {
//                     "Value": 6337.8,
//                     "Unit": "W/m²",
//                     "UnitType": 33
//                 }
//             },
//             "Night": {
//                 "Icon": 34,
//                 "IconPhrase": "Mostly clear",
//                 "HasPrecipitation": false,
//                 "ShortPhrase": "Clear to partly cloudy",
//                 "LongPhrase": "Clear to partly cloudy",
//                 "PrecipitationProbability": 3,
//                 "ThunderstormProbability": 0,
//                 "RainProbability": 3,
//                 "SnowProbability": 0,
//                 "IceProbability": 0,
//                 "Wind": {
//                     "Speed": {
//                         "Value": 11.1,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 119,
//                         "Localized": "ESE",
//                         "English": "ESE"
//                     }
//                 },
//                 "WindGust": {
//                     "Speed": {
//                         "Value": 25.9,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 120,
//                         "Localized": "ESE",
//                         "English": "ESE"
//                     }
//                 },
//                 "TotalLiquid": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Rain": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Snow": {
//                     "Value": 0,
//                     "Unit": "cm",
//                     "UnitType": 4
//                 },
//                 "Ice": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "HoursOfPrecipitation": 0,
//                 "HoursOfRain": 0,
//                 "HoursOfSnow": 0,
//                 "HoursOfIce": 0,
//                 "CloudCover": 18,
//                 "Evapotranspiration": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "SolarIrradiance": {
//                     "Value": 0,
//                     "Unit": "W/m²",
//                     "UnitType": 33
//                 }
//             },
//             "Sources": [
//                 "AccuWeather"
//             ],
//             "MobileLink": "http://www.accuweather.com/en/ge/batumi/13/daily-weather-forecast/13?day=1&unit=c&lang=en-us",
//             "Link": "http://www.accuweather.com/en/ge/batumi/13/daily-weather-forecast/13?day=1&unit=c&lang=en-us"
//         },
//         {
//             "Date": "2022-02-23T07:00:00+04:00",
//             "EpochDate": 1645585200,
//             "Sun": {
//                 "Rise": "2022-02-23T07:58:00+04:00",
//                 "EpochRise": 1645588680,
//                 "Set": "2022-02-23T18:56:00+04:00",
//                 "EpochSet": 1645628160
//             },
//             "Moon": {
//                 "Rise": "2022-02-23T01:21:00+04:00",
//                 "EpochRise": 1645564860,
//                 "Set": "2022-02-23T11:24:00+04:00",
//                 "EpochSet": 1645601040,
//                 "Phase": "WaningGibbous",
//                 "Age": 22
//             },
//             "Temperature": {
//                 "Minimum": {
//                     "Value": 11.6,
//                     "Unit": "C",
//                     "UnitType": 17
//                 },
//                 "Maximum": {
//                     "Value": 17.1,
//                     "Unit": "C",
//                     "UnitType": 17
//                 }
//             },
//             "RealFeelTemperature": {
//                 "Minimum": {
//                     "Value": 10.7,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Cool"
//                 },
//                 "Maximum": {
//                     "Value": 19.3,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Pleasant"
//                 }
//             },
//             "RealFeelTemperatureShade": {
//                 "Minimum": {
//                     "Value": 10.7,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Cool"
//                 },
//                 "Maximum": {
//                     "Value": 16.3,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Cool"
//                 }
//             },
//             "HoursOfSun": 10.7,
//             "DegreeDaySummary": {
//                 "Heating": {
//                     "Value": 4,
//                     "Unit": "C",
//                     "UnitType": 17
//                 },
//                 "Cooling": {
//                     "Value": 0,
//                     "Unit": "C",
//                     "UnitType": 17
//                 }
//             },
//             "AirAndPollen": [
//                 {
//                     "Name": "AirQuality",
//                     "Value": 0,
//                     "Category": "Good",
//                     "CategoryValue": 1,
//                     "Type": "Ozone"
//                 },
//                 {
//                     "Name": "Grass",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "Mold",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "Ragweed",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "Tree",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "UVIndex",
//                     "Value": 4,
//                     "Category": "Moderate",
//                     "CategoryValue": 2
//                 }
//             ],
//             "Day": {
//                 "Icon": 1,
//                 "IconPhrase": "Sunny",
//                 "HasPrecipitation": false,
//                 "ShortPhrase": "Sunny and pleasantly warm",
//                 "LongPhrase": "Sunny and pleasantly warm",
//                 "PrecipitationProbability": 3,
//                 "ThunderstormProbability": 0,
//                 "RainProbability": 3,
//                 "SnowProbability": 0,
//                 "IceProbability": 0,
//                 "Wind": {
//                     "Speed": {
//                         "Value": 9.3,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 64,
//                         "Localized": "ENE",
//                         "English": "ENE"
//                     }
//                 },
//                 "WindGust": {
//                     "Speed": {
//                         "Value": 24.1,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 119,
//                         "Localized": "ESE",
//                         "English": "ESE"
//                     }
//                 },
//                 "TotalLiquid": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Rain": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Snow": {
//                     "Value": 0,
//                     "Unit": "cm",
//                     "UnitType": 4
//                 },
//                 "Ice": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "HoursOfPrecipitation": 0,
//                 "HoursOfRain": 0,
//                 "HoursOfSnow": 0,
//                 "HoursOfIce": 0,
//                 "CloudCover": 3,
//                 "Evapotranspiration": {
//                     "Value": 0.1,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "SolarIrradiance": {
//                     "Value": 6652.9,
//                     "Unit": "W/m²",
//                     "UnitType": 33
//                 }
//             },
//             "Night": {
//                 "Icon": 33,
//                 "IconPhrase": "Clear",
//                 "HasPrecipitation": false,
//                 "ShortPhrase": "Clear",
//                 "LongPhrase": "Clear",
//                 "PrecipitationProbability": 1,
//                 "ThunderstormProbability": 0,
//                 "RainProbability": 1,
//                 "SnowProbability": 0,
//                 "IceProbability": 0,
//                 "Wind": {
//                     "Speed": {
//                         "Value": 9.3,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 117,
//                         "Localized": "ESE",
//                         "English": "ESE"
//                     }
//                 },
//                 "WindGust": {
//                     "Speed": {
//                         "Value": 24.1,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 127,
//                         "Localized": "SE",
//                         "English": "SE"
//                     }
//                 },
//                 "TotalLiquid": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Rain": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Snow": {
//                     "Value": 0,
//                     "Unit": "cm",
//                     "UnitType": 4
//                 },
//                 "Ice": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "HoursOfPrecipitation": 0,
//                 "HoursOfRain": 0,
//                 "HoursOfSnow": 0,
//                 "HoursOfIce": 0,
//                 "CloudCover": 0,
//                 "Evapotranspiration": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "SolarIrradiance": {
//                     "Value": 0,
//                     "Unit": "W/m²",
//                     "UnitType": 33
//                 }
//             },
//             "Sources": [
//                 "AccuWeather"
//             ],
//             "MobileLink": "http://www.accuweather.com/en/ge/batumi/13/daily-weather-forecast/13?day=2&unit=c&lang=en-us",
//             "Link": "http://www.accuweather.com/en/ge/batumi/13/daily-weather-forecast/13?day=2&unit=c&lang=en-us"
//         },
//         {
//             "Date": "2022-02-24T07:00:00+04:00",
//             "EpochDate": 1645671600,
//             "Sun": {
//                 "Rise": "2022-02-24T07:57:00+04:00",
//                 "EpochRise": 1645675020,
//                 "Set": "2022-02-24T18:57:00+04:00",
//                 "EpochSet": 1645714620
//             },
//             "Moon": {
//                 "Rise": "2022-02-24T02:36:00+04:00",
//                 "EpochRise": 1645655760,
//                 "Set": "2022-02-24T12:02:00+04:00",
//                 "EpochSet": 1645689720,
//                 "Phase": "Last",
//                 "Age": 23
//             },
//             "Temperature": {
//                 "Minimum": {
//                     "Value": 11.5,
//                     "Unit": "C",
//                     "UnitType": 17
//                 },
//                 "Maximum": {
//                     "Value": 17.4,
//                     "Unit": "C",
//                     "UnitType": 17
//                 }
//             },
//             "RealFeelTemperature": {
//                 "Minimum": {
//                     "Value": 10.8,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Cool"
//                 },
//                 "Maximum": {
//                     "Value": 18.7,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Pleasant"
//                 }
//             },
//             "RealFeelTemperatureShade": {
//                 "Minimum": {
//                     "Value": 10.8,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Cool"
//                 },
//                 "Maximum": {
//                     "Value": 17,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Pleasant"
//                 }
//             },
//             "HoursOfSun": 10,
//             "DegreeDaySummary": {
//                 "Heating": {
//                     "Value": 4,
//                     "Unit": "C",
//                     "UnitType": 17
//                 },
//                 "Cooling": {
//                     "Value": 0,
//                     "Unit": "C",
//                     "UnitType": 17
//                 }
//             },
//             "AirAndPollen": [
//                 {
//                     "Name": "AirQuality",
//                     "Value": 0,
//                     "Category": "Good",
//                     "CategoryValue": 1,
//                     "Type": "Ozone"
//                 },
//                 {
//                     "Name": "Grass",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "Mold",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "Ragweed",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "Tree",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "UVIndex",
//                     "Value": 4,
//                     "Category": "Moderate",
//                     "CategoryValue": 2
//                 }
//             ],
//             "Day": {
//                 "Icon": 2,
//                 "IconPhrase": "Mostly sunny",
//                 "HasPrecipitation": false,
//                 "ShortPhrase": "Mostly sunny and pleasant",
//                 "LongPhrase": "Mostly sunny and pleasantly warm",
//                 "PrecipitationProbability": 0,
//                 "ThunderstormProbability": 0,
//                 "RainProbability": 0,
//                 "SnowProbability": 0,
//                 "IceProbability": 0,
//                 "Wind": {
//                     "Speed": {
//                         "Value": 9.3,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 63,
//                         "Localized": "ENE",
//                         "English": "ENE"
//                     }
//                 },
//                 "WindGust": {
//                     "Speed": {
//                         "Value": 27.8,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 126,
//                         "Localized": "SE",
//                         "English": "SE"
//                     }
//                 },
//                 "TotalLiquid": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Rain": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Snow": {
//                     "Value": 0,
//                     "Unit": "cm",
//                     "UnitType": 4
//                 },
//                 "Ice": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "HoursOfPrecipitation": 0,
//                 "HoursOfRain": 0,
//                 "HoursOfSnow": 0,
//                 "HoursOfIce": 0,
//                 "CloudCover": 11,
//                 "Evapotranspiration": {
//                     "Value": 0.1,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "SolarIrradiance": {
//                     "Value": 6779.8,
//                     "Unit": "W/m²",
//                     "UnitType": 33
//                 }
//             },
//             "Night": {
//                 "Icon": 36,
//                 "IconPhrase": "Intermittent clouds",
//                 "HasPrecipitation": false,
//                 "ShortPhrase": "Partly cloudy",
//                 "LongPhrase": "Partly cloudy",
//                 "PrecipitationProbability": 0,
//                 "ThunderstormProbability": 0,
//                 "RainProbability": 0,
//                 "SnowProbability": 0,
//                 "IceProbability": 0,
//                 "Wind": {
//                     "Speed": {
//                         "Value": 9.3,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 117,
//                         "Localized": "ESE",
//                         "English": "ESE"
//                     }
//                 },
//                 "WindGust": {
//                     "Speed": {
//                         "Value": 25.9,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 118,
//                         "Localized": "ESE",
//                         "English": "ESE"
//                     }
//                 },
//                 "TotalLiquid": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Rain": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Snow": {
//                     "Value": 0,
//                     "Unit": "cm",
//                     "UnitType": 4
//                 },
//                 "Ice": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "HoursOfPrecipitation": 0,
//                 "HoursOfRain": 0,
//                 "HoursOfSnow": 0,
//                 "HoursOfIce": 0,
//                 "CloudCover": 64,
//                 "Evapotranspiration": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "SolarIrradiance": {
//                     "Value": 0,
//                     "Unit": "W/m²",
//                     "UnitType": 33
//                 }
//             },
//             "Sources": [
//                 "AccuWeather"
//             ],
//             "MobileLink": "http://www.accuweather.com/en/ge/batumi/13/daily-weather-forecast/13?day=3&unit=c&lang=en-us",
//             "Link": "http://www.accuweather.com/en/ge/batumi/13/daily-weather-forecast/13?day=3&unit=c&lang=en-us"
//         },
//         {
//             "Date": "2022-02-25T07:00:00+04:00",
//             "EpochDate": 1645758000,
//             "Sun": {
//                 "Rise": "2022-02-25T07:55:00+04:00",
//                 "EpochRise": 1645761300,
//                 "Set": "2022-02-25T18:58:00+04:00",
//                 "EpochSet": 1645801080
//             },
//             "Moon": {
//                 "Rise": "2022-02-25T03:50:00+04:00",
//                 "EpochRise": 1645746600,
//                 "Set": "2022-02-25T12:49:00+04:00",
//                 "EpochSet": 1645778940,
//                 "Phase": "WaningCrescent",
//                 "Age": 24
//             },
//             "Temperature": {
//                 "Minimum": {
//                     "Value": 10.6,
//                     "Unit": "C",
//                     "UnitType": 17
//                 },
//                 "Maximum": {
//                     "Value": 15.3,
//                     "Unit": "C",
//                     "UnitType": 17
//                 }
//             },
//             "RealFeelTemperature": {
//                 "Minimum": {
//                     "Value": 6.9,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Chilly"
//                 },
//                 "Maximum": {
//                     "Value": 17,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Pleasant"
//                 }
//             },
//             "RealFeelTemperatureShade": {
//                 "Minimum": {
//                     "Value": 6.9,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Chilly"
//                 },
//                 "Maximum": {
//                     "Value": 15.5,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Cool"
//                 }
//             },
//             "HoursOfSun": 1.1,
//             "DegreeDaySummary": {
//                 "Heating": {
//                     "Value": 5,
//                     "Unit": "C",
//                     "UnitType": 17
//                 },
//                 "Cooling": {
//                     "Value": 0,
//                     "Unit": "C",
//                     "UnitType": 17
//                 }
//             },
//             "AirAndPollen": [
//                 {
//                     "Name": "AirQuality",
//                     "Value": 0,
//                     "Category": "Good",
//                     "CategoryValue": 1,
//                     "Type": "Ozone"
//                 },
//                 {
//                     "Name": "Grass",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "Mold",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "Ragweed",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "Tree",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "UVIndex",
//                     "Value": 1,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 }
//             ],
//             "Day": {
//                 "Icon": 7,
//                 "IconPhrase": "Cloudy",
//                 "HasPrecipitation": false,
//                 "ShortPhrase": "Cloudy and mild",
//                 "LongPhrase": "Cloudy and mild",
//                 "PrecipitationProbability": 25,
//                 "ThunderstormProbability": 0,
//                 "RainProbability": 25,
//                 "SnowProbability": 0,
//                 "IceProbability": 0,
//                 "Wind": {
//                     "Speed": {
//                         "Value": 9.3,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 185,
//                         "Localized": "S",
//                         "English": "S"
//                     }
//                 },
//                 "WindGust": {
//                     "Speed": {
//                         "Value": 35.2,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 208,
//                         "Localized": "SSW",
//                         "English": "SSW"
//                     }
//                 },
//                 "TotalLiquid": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Rain": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Snow": {
//                     "Value": 0,
//                     "Unit": "cm",
//                     "UnitType": 4
//                 },
//                 "Ice": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "HoursOfPrecipitation": 0,
//                 "HoursOfRain": 0,
//                 "HoursOfSnow": 0,
//                 "HoursOfIce": 0,
//                 "CloudCover": 99,
//                 "Evapotranspiration": {
//                     "Value": 0.1,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "SolarIrradiance": {
//                     "Value": 2344.2,
//                     "Unit": "W/m²",
//                     "UnitType": 33
//                 }
//             },
//             "Night": {
//                 "Icon": 18,
//                 "IconPhrase": "Rain",
//                 "HasPrecipitation": true,
//                 "PrecipitationType": "Rain",
//                 "PrecipitationIntensity": "Light",
//                 "ShortPhrase": "Periods of rain",
//                 "LongPhrase": "Periods of rain",
//                 "PrecipitationProbability": 93,
//                 "ThunderstormProbability": 1,
//                 "RainProbability": 93,
//                 "SnowProbability": 0,
//                 "IceProbability": 0,
//                 "Wind": {
//                     "Speed": {
//                         "Value": 13,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 202,
//                         "Localized": "SSW",
//                         "English": "SSW"
//                     }
//                 },
//                 "WindGust": {
//                     "Speed": {
//                         "Value": 29.6,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 205,
//                         "Localized": "SSW",
//                         "English": "SSW"
//                     }
//                 },
//                 "TotalLiquid": {
//                     "Value": 9.3,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Rain": {
//                     "Value": 9.3,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Snow": {
//                     "Value": 0,
//                     "Unit": "cm",
//                     "UnitType": 4
//                 },
//                 "Ice": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "HoursOfPrecipitation": 5.5,
//                 "HoursOfRain": 5.5,
//                 "HoursOfSnow": 0,
//                 "HoursOfIce": 0,
//                 "CloudCover": 100,
//                 "Evapotranspiration": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "SolarIrradiance": {
//                     "Value": 0,
//                     "Unit": "W/m²",
//                     "UnitType": 33
//                 }
//             },
//             "Sources": [
//                 "AccuWeather"
//             ],
//             "MobileLink": "http://www.accuweather.com/en/ge/batumi/13/daily-weather-forecast/13?day=4&unit=c&lang=en-us",
//             "Link": "http://www.accuweather.com/en/ge/batumi/13/daily-weather-forecast/13?day=4&unit=c&lang=en-us"
//         },
//         {
//             "Date": "2022-02-26T07:00:00+04:00",
//             "EpochDate": 1645844400,
//             "Sun": {
//                 "Rise": "2022-02-26T07:54:00+04:00",
//                 "EpochRise": 1645847640,
//                 "Set": "2022-02-26T19:00:00+04:00",
//                 "EpochSet": 1645887600
//             },
//             "Moon": {
//                 "Rise": "2022-02-26T04:59:00+04:00",
//                 "EpochRise": 1645837140,
//                 "Set": "2022-02-26T13:48:00+04:00",
//                 "EpochSet": 1645868880,
//                 "Phase": "WaningCrescent",
//                 "Age": 25
//             },
//             "Temperature": {
//                 "Minimum": {
//                     "Value": 9.6,
//                     "Unit": "C",
//                     "UnitType": 17
//                 },
//                 "Maximum": {
//                     "Value": 12.3,
//                     "Unit": "C",
//                     "UnitType": 17
//                 }
//             },
//             "RealFeelTemperature": {
//                 "Minimum": {
//                     "Value": 4.8,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Chilly"
//                 },
//                 "Maximum": {
//                     "Value": 9.7,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Chilly"
//                 }
//             },
//             "RealFeelTemperatureShade": {
//                 "Minimum": {
//                     "Value": 4.8,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Chilly"
//                 },
//                 "Maximum": {
//                     "Value": 9.7,
//                     "Unit": "C",
//                     "UnitType": 17,
//                     "Phrase": "Chilly"
//                 }
//             },
//             "HoursOfSun": 0.1,
//             "DegreeDaySummary": {
//                 "Heating": {
//                     "Value": 7,
//                     "Unit": "C",
//                     "UnitType": 17
//                 },
//                 "Cooling": {
//                     "Value": 0,
//                     "Unit": "C",
//                     "UnitType": 17
//                 }
//             },
//             "AirAndPollen": [
//                 {
//                     "Name": "AirQuality",
//                     "Value": 0,
//                     "Category": "Good",
//                     "CategoryValue": 1,
//                     "Type": "Ozone"
//                 },
//                 {
//                     "Name": "Grass",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "Mold",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "Ragweed",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "Tree",
//                     "Value": 0,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 },
//                 {
//                     "Name": "UVIndex",
//                     "Value": 1,
//                     "Category": "Low",
//                     "CategoryValue": 1
//                 }
//             ],
//             "Day": {
//                 "Icon": 18,
//                 "IconPhrase": "Rain",
//                 "HasPrecipitation": true,
//                 "PrecipitationType": "Rain",
//                 "PrecipitationIntensity": "Light",
//                 "ShortPhrase": "Mild with periods of rain",
//                 "LongPhrase": "Mild with periods of rain",
//                 "PrecipitationProbability": 96,
//                 "ThunderstormProbability": 0,
//                 "RainProbability": 96,
//                 "SnowProbability": 0,
//                 "IceProbability": 0,
//                 "Wind": {
//                     "Speed": {
//                         "Value": 16.7,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 207,
//                         "Localized": "SSW",
//                         "English": "SSW"
//                     }
//                 },
//                 "WindGust": {
//                     "Speed": {
//                         "Value": 48.2,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 210,
//                         "Localized": "SSW",
//                         "English": "SSW"
//                     }
//                 },
//                 "TotalLiquid": {
//                     "Value": 16,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Rain": {
//                     "Value": 16,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Snow": {
//                     "Value": 0,
//                     "Unit": "cm",
//                     "UnitType": 4
//                 },
//                 "Ice": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "HoursOfPrecipitation": 5.5,
//                 "HoursOfRain": 5.5,
//                 "HoursOfSnow": 0,
//                 "HoursOfIce": 0,
//                 "CloudCover": 100,
//                 "Evapotranspiration": {
//                     "Value": 0.1,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "SolarIrradiance": {
//                     "Value": 2452.7,
//                     "Unit": "W/m²",
//                     "UnitType": 33
//                 }
//             },
//             "Night": {
//                 "Icon": 12,
//                 "IconPhrase": "Showers",
//                 "HasPrecipitation": true,
//                 "PrecipitationType": "Rain",
//                 "PrecipitationIntensity": "Moderate",
//                 "ShortPhrase": "Early rain; otherwise, cloudy",
//                 "LongPhrase": "Periods of rain in the evening; otherwise, cloudy",
//                 "PrecipitationProbability": 90,
//                 "ThunderstormProbability": 0,
//                 "RainProbability": 90,
//                 "SnowProbability": 0,
//                 "IceProbability": 0,
//                 "Wind": {
//                     "Speed": {
//                         "Value": 13,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 202,
//                         "Localized": "SSW",
//                         "English": "SSW"
//                     }
//                 },
//                 "WindGust": {
//                     "Speed": {
//                         "Value": 37,
//                         "Unit": "km/h",
//                         "UnitType": 7
//                     },
//                     "Direction": {
//                         "Degrees": 204,
//                         "Localized": "SSW",
//                         "English": "SSW"
//                     }
//                 },
//                 "TotalLiquid": {
//                     "Value": 16.4,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Rain": {
//                     "Value": 16.4,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "Snow": {
//                     "Value": 0,
//                     "Unit": "cm",
//                     "UnitType": 4
//                 },
//                 "Ice": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "HoursOfPrecipitation": 4,
//                 "HoursOfRain": 4,
//                 "HoursOfSnow": 0,
//                 "HoursOfIce": 0,
//                 "CloudCover": 100,
//                 "Evapotranspiration": {
//                     "Value": 0,
//                     "Unit": "mm",
//                     "UnitType": 3
//                 },
//                 "SolarIrradiance": {
//                     "Value": 0,
//                     "Unit": "W/m²",
//                     "UnitType": 33
//                 }
//             },
//             "Sources": [
//                 "AccuWeather"
//             ],
//             "MobileLink": "http://www.accuweather.com/en/ge/batumi/13/daily-weather-forecast/13?day=5&unit=c&lang=en-us",
//             "Link": "http://www.accuweather.com/en/ge/batumi/13/daily-weather-forecast/13?day=5&unit=c&lang=en-us"
//         }
//     ]
// }]