import React from "react";
import { NavLink, withRouter } from "react-router-dom"

class _AppHeader extends React.Component {
    render() {
        return (
            <header className="app-header main-container">
                <div className="main-header flex">
                    <div className="logo" onClick={() => this.props.history.push("/")}>
                        <span>M</span>y <span>W</span>eather
                    </div>
                    <nav className="main-nav">
                        <NavLink activeClassName="active" className="clean-link" exact to="/">Home</NavLink>
                        <NavLink activeClassName="active" className="clean-link" to="/favorites">Favorites</NavLink>
                    </nav>
                </div>
            </header>
        )
    }
}

export const AppHeader = withRouter(_AppHeader);