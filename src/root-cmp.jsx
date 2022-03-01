import React from 'react'
import { Switch, Route } from 'react-router-dom'


import { HomePage } from './pages/home-page.jsx'
import { Favorites } from './pages/favorites-page.jsx'
import { AppHeader } from './cmps/app-header.jsx'


export class RootCmp extends React.Component {

    render() {
        return (
            <>
                <AppHeader />
                <Switch>
                    <Route component={Favorites} path="/favorites" />
                    <Route component={HomePage} exact path="/:cityId" />
                    <Route component={HomePage} exact path="/" />
                </Switch>
                {/* <div onClick={() => { this.props.toggleModal() }} className={this.props.isModalOpen ? "screen open" : "screen"}></div> */}
            </>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         isModalOpen: state.pageModule.isModalOpen
//     }
// }

// const mapDispatchToProps = {
//     toggleModal
// }

// export const RootCmp = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(_RootCmp)