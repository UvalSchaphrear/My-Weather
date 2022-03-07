import React from "react"
import { connect } from "react-redux"
import { loadFavorites, removeFavorite } from "../store/favorite.action.js"
import { Link } from "react-router-dom"



class _Favorites extends React.Component {

    componentDidMount() {
        if (!this.props.favorites.length) this.props.loadFavorites()
    }

    render() {
        const { favorites } = this.props
        if (!favorites.length || !favorites) return <h1>'Loading'</h1>
        return (
            <main className="main-container">
                <div className="favorite-list flex"> {favorites.map(favorite => {
                    return <div className="favorite-container flex" key={favorite.Key}>
                        <Link className="favorite-link clean-link flex" key={favorite.Key} to={`/${favorite.Key}`}>
                            <div key={favorite.Key} className="favorite flex">
                                {favorite.LocalizedName}
                            </div>
                        </Link>
                        <span className="unlike flex" onClick={() => { this.props.removeFavorite(favorite) }}>x</span>
                    </div>

                })
                }</div>
            </main>
        )

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
