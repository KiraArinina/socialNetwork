import './App.css';
import React, {Component, lazy} from 'react';
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from 'react-redux';
import { compose } from 'redux';
import { withRouter} from 'react-router-dom/cjs/react-router-dom';
import {initializeApp} from './Redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader';
import {withSuspense} from "./hoc/withSuspense";
import {BrowserRouter, HashRouter} from "react-router-dom";
import store from "./Redux/redux-store";

const DialogsContainer = lazy( () => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy( () => import('./components/Profile/ProfileContainer'));
class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
        return <Preloader/>}
        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>
                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer)} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                    <Route path='/friends' render={() => <Friends/>} />
                    <Route path='/users' render={() => <UsersContainer />} />
                    <Route path='/login' render={() => <LoginPage />} />
                </div>
            </div>)
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <HashRouter >
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;