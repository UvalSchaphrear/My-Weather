import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
// import debounce from 'lodash.debounce'
import { forecastService } from '../services/forecast.service.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import { debounce } from 'lodash'


export function SearchBar(props) {

    const [searchBy, setSearchBy] = useState('')
    const [cities, setCities] = useState([])
    const isModalOpen = useRef(false)


    const onCitySelect = (city) => {
        const searchBy = city
        setSearchBy(searchBy)
        isModalOpen.current = false
        console.log(isModalOpen.current);

    }

    const onSubmitSearch = async () => {
        await props.submitSearch(searchBy)
        clearInput()
    }

    const clearInput = () => {
        const searchBy = ''
        setSearchBy(searchBy)
    }



    const handleChange = (ev) => {
        ev.preventDefault()
        const searchBy = ev.target.value
        setSearchBy({ ...searchBy, LocalizedName: searchBy })
        isModalOpen.current = true

        forecastService.getLocations(searchBy)
            .then(city => {
                const cities = city
                setCities(cities)
            })
    }



    return <main className="flex">
        <section>
            <div className="search-container flex">
                <input className="search-input" type="text" value={searchBy.LocalizedName ? searchBy.LocalizedName : ''} autoComplete="off" name="cities" placeholder="Search..." onChange={handleChange} />
                {console.log(searchBy)}
                <Link className="submit flex" onClick={onSubmitSearch} to={`/${searchBy.Key}`}>
                    <div onClick={onSubmitSearch}><FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} /></div>
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


// export class SearchBar extends React.Component {
//     state = {
//         searchBy: {
//             LocalizedName: ''
//         },
//         cities: [],
//         isModalOpen: false

//     }

//     onCitySelect = (city) => {
//         this.setState({ searchBy: city, isModalOpen: false })

//     }

//     onSubmitSearch = async () => {
//         const { searchBy } = this.state
//         console.log(searchBy);
//         await this.props.submitSearch(searchBy)
//         this.clearInput()
//     }

//     clearInput = () => {
//         this.setState({ searchBy: { ...this.state.searchBy, LocalizedName: '' } })
//     }


//     handleChange = (ev) => {
//         const value = ev.target.value
//         this.setState({ searchBy: { ...this.state.searchBy, LocalizedName: value }, isModalOpen: true })
//         console.log(this.state.cities);



//         forecastService.getLocations(value)
//             .then(city => {
//                 this.setState({ cities: city })
//             })

//     }


//     render() {
//         const { cities, isModalOpen, searchBy } = this.state
//         console.log(searchBy.Key)
//         return <main className="flex">
//             <section>
//                 <div className="search-container flex">
//                     <input className="search-input" type="text" value={searchBy.LocalizedName ? searchBy.LocalizedName : ''} autoComplete="off" name="cities" placeholder="Search..." onChange={this.handleChange} />
//                     <Link className="submit flex" onClick={this.onSubmitSearch} to={`/${searchBy.Key}`}>
//                         <div onClick={this.onSubmitSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
//                     </Link>
//                 </div>
//                 {isModalOpen && !!cities.length && <div className="dropdown-menu flex">
//                     {cities.map(city => {
//                         return <div key={city.Key}>
//                             <span className="dropdown-option" onClick={() => { this.onCitySelect(city) }}>  {city.LocalizedName} </span>
//                         </div>
//                     })}
//                 </div>}
//             </section>
//         </main>
//     }
// }