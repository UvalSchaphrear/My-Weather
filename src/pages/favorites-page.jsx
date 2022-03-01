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
            <div className="main-container flex"> {favorites.map(favorite => {
                return <div className="favorites-container flex" key={favorite.Key}>
                    <Link to={`/${favorite.Key}`}>
                        <div>
                            {favorite.LocalizedName}
                        </div>
                    </Link>
                    <span onClick={() => { favorite.isFavorite = false; this.props.removeFavorite(favorite) }}>X</span></div>

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
