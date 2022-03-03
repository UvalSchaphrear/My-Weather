import React from "react"
import { connect } from "react-redux"
import { NavLink, withRouter } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { loadFavorites, removeFavorite } from "../store/favortie.action.js"
import { Link } from "react-router-dom"



class _Favorites extends React.Component {

    render() {
        const { favorites } = this.props
        if (!favorites.length || !favorites) return <h1>'Loading'</h1>
        return (
            <div className="favorite-list main-container"> {favorites.map(favorite => {
                return <div className="favorite-container flex" key={favorite.Key}>
                    <Link className="favorite-link clean-link flex" to={`/${favorite.Key}`}>
                        <div className="favorite flex">
                            {favorite.LocalizedName}
                        </div>
                    </Link>
                    <span className="unlike flex" onClick={() => { favorite.isFavorite = false; this.props.removeFavorite(favorite) }}>x</span>
                </div>

            })
            }</div>)
    }
}


function mapStateToProps(state) {
    return {
        favorites: state.favoriteModule.favorites,
    }
}

const mapDispatchToProps = {
    loadFavorites,
    removeFavorite

}


export const Favorites = connect(mapStateToProps, mapDispatchToProps)(_Favorites);
