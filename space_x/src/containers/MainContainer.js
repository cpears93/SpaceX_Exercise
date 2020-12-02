import React, { Fragment } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar.js';
import LaunchContainer from './LaunchContainer.js';

const MainContainer = () => {

    return (
            <Router>
            <Fragment>
            <NavBar/>
            <Switch>
                <Route path = "/launches" component = { LaunchContainer }/> <
        </Switch>


        </Fragment> 
        </Router>
    )
}

export default MainContainer;