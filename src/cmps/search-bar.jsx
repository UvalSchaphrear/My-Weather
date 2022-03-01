import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { forecastService } from '../services/forecast.service.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export class SearchBar extends React.Component {
    state = {
        searchBy: {
            LocalizedName: ''
        },
        cities: [],
        isModalOpen: false

    }

    // const [city, setCity] = useState('')
    // const [citiesList, setCitiesList] = useState([])

    onCitySelect = (city) => {
        this.setState({ searchBy: city, isModalOpen: false })

    }
    onSubmitSearch = async () => {
        const { searchBy } = this.state
        await this.props.submitSearch(searchBy)
        this.clearInput()
    }

    clearInput = () => {
        this.setState({ searchBy: { ...this.state.searchBy, LocalizedName: '' } })
    }


    handleChange = (ev) => {
        const value = ev.target.value
        this.setState({ searchBy: { ...this.state.searchBy, LocalizedName: value }, isModalOpen: true })

        forecastService.getLocations(value)
            .then(city => {
                this.setState({ cities: city })
            })

    }


    render() {
        const { cities, isModalOpen, searchBy } = this.state
        return <main className="flex">
            <section>
                <div className="search-container flex">
                    <input className="search-input" type="text" value={searchBy.LocalizedName ? searchBy.LocalizedName : ''} autoComplete="off" name="cities" placeholder="Search..." onChange={this.handleChange} />
                    <Link className="submit flex" onClick={this.onSubmitSearch} to={`/${searchBy.Key}`}>
                        <div onClick={this.onSubmitSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    </Link>
                </div>
                {isModalOpen && <div className="dropdown-menu flex">
                    {cities.map(city => {
                        return <div key={city.Key}>
                            <span className="dropdown-option" onClick={() => { this.onCitySelect(city) }}>  {city.LocalizedName} </span>
                        </div>
                    })}
                </div>}
            </section>
        </main>
    }
}