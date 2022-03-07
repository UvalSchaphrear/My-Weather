import React from 'react'
import { connect } from 'react-redux'
import { SearchBar } from '../cmps/search-bar.jsx'
import { forecastService } from '../services/forecast.service.js'
import { ForecastDisplay } from '../cmps/forecast-display.jsx'
import { loadFavorites, addFavorite, removeFavorite } from '../store/favorite.action.js'



class _HomePage extends React.Component {

    state = {
        forecast: [],
        city: ''
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
        if (!cityId) return this.setState({ forecast: [], city: null })
        return (async () => {
            const city = await forecastService.getByKey(cityId)

            const forecast = await forecastService.getForecast(city)
            this.setState({ forecast, city })
        })()
    }


    render() {
        const { forecast } = this.state
        const { favorites } = this.props
        return <main className="main-container home-page">
            <div className="search-bar flex">
                <SearchBar submitSearch={this.submitSearch} />
            </div>
            <div className="forecast-layout main-container flex">
                <div className="forecast-container flex">
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
