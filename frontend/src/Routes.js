import React, { Profiler } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from './Home';
import CompanyList from './CompanyList';
import Company from './Company';
import JobList from './JobList';
import LoginForm from './LoginForm';
import Profile from './Profile';


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
                <Profile/>
            </Route>

        </Switch>
    )
}

export default Routes;