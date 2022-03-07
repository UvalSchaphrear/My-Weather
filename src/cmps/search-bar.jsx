import React from 'react'
import { useState, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import debounce from 'lodash.debounce'
import { forecastService } from '../services/forecast.service.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export const SearchBar = (props) => {

    const [searchBy, setSearchBy] = useState('')
    const [cities, setCities] = useState([])
    const isModalOpen = useRef(false)


    const onCitySelect = (city) => {
        const searchBy = city
        setSearchBy(searchBy)
        isModalOpen.current = false

    }

    const onSubmitSearch = async () => {
        await props.submitSearch(searchBy)
        clearInput()
    }

    const clearInput = () => {
        const searchBy = ''
        setSearchBy(searchBy)
    }

    const debounced = useCallback(debounce(searchBy => forecastService.getLocations(searchBy)
        .then(city => {
            const cities = city
            console.log('DEBOUNCED FUNCTION ACTIVATED')
            setCities(cities)
        }), 2000), [])

    const handleChange = (ev) => {
        ev.preventDefault()
        const value = ev.target.value
        setSearchBy({ ...searchBy, LocalizedName: value })

        if (value.length) {
            isModalOpen.current = true
            debounced(value)

        } else {
            isModalOpen.current = false
        }
    }



    return <main className="flex">
        <section>
            <div className="search-container flex">
                <input className="search-input" type="text" value={searchBy.LocalizedName ? searchBy.LocalizedName : ''} autoComplete="off" name="cities" placeholder="Search..." onChange={handleChange} />
                <Link className="submit flex" onClick={onSubmitSearch} to={`/${searchBy.Key}`}>
                    <div><FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} /></div>
                </Link>
            </div>
            {isModalOpen.current && !!cities.length && <div className="dropdown-menu flex">
                {cities.map(city => {
                    return <div key={city.Key}>
                        <span className="dropdown-option" onClick={() => { onCitySelect(city) }}>  {city.LocalizedName} </span>
                    </div>
                })}
            </div>}
        </section>
    </main>
}

