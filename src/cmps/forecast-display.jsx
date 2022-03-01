import React from "react"
import { connect } from "react-redux"
import { utilService } from "../services/utils.service"
import { loadFavorites, addFavorite, removeFavorite } from '../store/favortie.action.js'
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



class _ForecastDisplay extends React.Component {
    state = {
        forecast: this.props.forecast,
        city: this.props.city,
        favorites: this.props.favorites
    }

    componentDidMount() {
        this.props.loadFavorites()
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props)
            this.setState({
                city: this.props.city,
                favorites: this.props.favorites,
                forecast: this.props.forecast
            })
    }


    onAddToFavorites = async (ev) => {
        ev.preventDefault()
        const { city, favorites } = this.props
        if (favorites.some(favorite => favorite.Key === city.Key)) {
            // city.isFavorite = false
            this.props.removeFavorite(city)
        } else {
            // city.isFavorite = true
            this.props.addFavorite(city)
        }
    }

    render() {
        const { forecast, city, favorites } = this.state
        // const heartIcon = (city.isFavorite) ? fullHeart : emptyHeart
        const heartIcon = (favorites.includes(city)) ? fullHeart : emptyHeart

        return <>
            <div>{city.LocalizedName}</div>
            {forecast.map(dailyForecast => {
                return <div className="day-card" key={dailyForecast.Date}>
                    <div onClick={() => console.log()}></div>
                    <span>{utilService.getDay(dailyForecast.EpochDate)} {utilService.getDate(dailyForecast.EpochDate)} </span>
                    <div>Temperatures between {dailyForecast.Temperature.Maximum.Value}{dailyForecast.Temperature.Maximum.Unit} and {dailyForecast.Temperature.Minimum.Value}{dailyForecast.Temperature.Minimum.Unit} </div>
                    <div>At daytime weather will be {dailyForecast.Day.IconPhrase}</div>
                    <img src={`https://www.accuweather.com/images/weathericons/${dailyForecast.Day.Icon}.svg`} alt="" />
                    <div>At night-time weather will be {dailyForecast.Night.IconPhrase}</div>
                    <img src={`https://www.accuweather.com/images/weathericons/${dailyForecast.Night.Icon}.svg`} alt="" />

                </div>
            })
            }
            {!!this.state.forecast.length && <FontAwesomeIcon icon={heartIcon} onClick={this.onAddToFavorites} />}
        </>
    }

}


function mapStateToProps(state) {
    return {
        favorites: state.favoriteModule.favorites,
    }
}

const mapDispatchToProps = {
    loadFavorites,
    addFavorite,
    removeFavorite

}


export const ForecastDisplay = connect(mapStateToProps, mapDispatchToProps)(_ForecastDisplay);
