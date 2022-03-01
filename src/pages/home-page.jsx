import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from "react-router-dom"
import { SearchBar } from '../cmps/search-bar.jsx'
import { forecastService } from '../services/forecast.service.js'
import { favoriteService } from '../services/favorite.service.js'
import { ForecastDisplay } from '../cmps/forecast-display.jsx'
import { loadFavorites, addFavorite, removeFavorite } from '../store/favortie.action.js'


class _HomePage extends React.Component {

    state = {
        forecast: [],
        city: ''
    }

    componentDidMount() {
        this.props.loadFavorites()
    }

    submitSearch = (city) => {
        forecastService.getForecast(city.Key)
            .then(forecast => {
                this.setState({ forecast, city })
            })

    }

    componentDidMount() {
        this.props.loadFavorites()
        this.submitSearch()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params !== this.props.match.params)
            this.submitSearch()
    }

    submitSearch = () => {
        const { cityId } = this.props.match.params
        console.log(this.props.match.params);
        if (!cityId) return this.setState({ forecast: [], city: null })
        return (async () => {
            console.log(cityId);
            const city = await forecastService.getByKey(cityId)

            console.log(city);
            const forecast = await forecastService.getForecast(city.Key)
            this.setState({ forecast, city }, () => { console.log(this.state) })
        })()
    }


    render() {
        const { city, forecast } = this.state
        const { favorites } = this.props
        return <main className="main-container">
            <div className="search-bar flex">
                <SearchBar submitSearch={this.submitSearch} />
            </div>
            <div className="home-page flex">
                {/* {!!this.state.forecast.length && <span onClick={this.onAddToFavorites}>Save to Favorites</span>} */}
                <div className="flex">
                    {!!this.state.forecast.length &&
                        <ForecastDisplay favorites={favorites} city={this.state.city} forecast={forecast} />}
                </div>
            </div>
        </main>
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


export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage);
