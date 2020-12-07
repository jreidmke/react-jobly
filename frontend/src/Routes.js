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
import LoggedOut from './LoggedOut';


function Routes() {
    return(
        <Switch>

            <Route exact path='/'>
                <Home/> 
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

            <Route exact path='/logout'>
                <LoggedOut/>
            </Route>

        </Switch>
    )
}

export default Routes;