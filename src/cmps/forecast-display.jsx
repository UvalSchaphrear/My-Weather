import React from "react"
import { connect } from "react-redux"
import { utilService } from "../services/utils.service"
import { loadFavorites, addFavorite, removeFavorite } from '../store/favorite.action.js'
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
            this.props.removeFavorite(city)
        } else {
            this.props.addFavorite(city)
        }
    }

    changeFavIcon = (city) => {
        const { favorites } = this.state
        return (favorites.some(favorite => favorite.Key === city.Key))
    }


    render() {
        const { forecast, city, favorites } = this.props
        const heartIcon = (this.changeFavIcon(city)) ? fullHeart : emptyHeart

        return <>
            <div className="card-container flex">
                <div className="location-and-like flex">
                    <div className="city-name">{city.LocalizedName}</div>
                    {!!this.state.forecast.length && <FontAwesomeIcon className="like-icon" icon={heartIcon} onClick={this.onAddToFavorites} />}
                </div>
                <div className="forecast-container flex">
                    {forecast.map(dailyForecast => {
                        return <div className="day-card" key={dailyForecast.Date}>
                            {/* <div onClick={() => console.log()}></div> */}
                            <span>{utilService.getDay(dailyForecast.EpochDate)} {utilService.getDate(dailyForecast.EpochDate)} </span>
                            <div>Temperatures between {dailyForecast.Temperature.Maximum.Value}{dailyForecast.Temperature.Maximum.Unit} and {dailyForecast.Temperature.Minimum.Value}{dailyForecast.Temperature.Minimum.Unit} </div>
                            <div>At daytime weather will be {dailyForecast.Day.IconPhrase}</div>
                            <img src={`https://www.accuweather.com/images/weathericons/${dailyForecast.Day.Icon}.svg`} alt="" />
                            <div>At night-time weather will be {dailyForecast.Night.IconPhrase}</div>
                            <img src={`https://www.accuweather.com/images/weathericons/${dailyForecast.Night.Icon}.svg`} alt="" />

                        </div>
                    })
                    }
                </div>
            </div>
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
