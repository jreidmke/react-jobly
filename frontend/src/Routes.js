import React, { Profiler } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from './Home';

function Routes() {
    return(
        <Switch>

            <Route exact path='/'>
                <Home/> {/*make a home component*/}
            </Route>

            <Route exact path='/companies'>
                <CompanyList/>
            </Route>

            <Route exact path='/companies/:handle'>
                <Company/>
            </Route>

            <Route exact path='/jobs'>
                <JobList/>
            </Route>

            <Route exact path='/login'>
                <LoginForm/>
            </Route>

            <Route exact path='/profile'>
                <Profiler/>
            </Route>

        </Switch>
    )
}

export default Routes;