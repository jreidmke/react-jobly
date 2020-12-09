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
import RegisterForm from './RegisterForm';
import ProtectedRoute from './ProtectedRoute';

function Routes() {
    return(
        <Switch>

            <Route exact path='/'>
                <Home/>
            </Route>

            <ProtectedRoute exact path='/companies'>
                <CompanyList/>
            </ProtectedRoute>

            <ProtectedRoute path='/companies/:handle'>
                <Company/>
            </ProtectedRoute>

            <ProtectedRoute exact path='/jobs'>
                <JobList/>
            </ProtectedRoute>

            <Route exact path='/login'>
                <LoginForm/>
            </Route>

            <Route exact path='/profile'>
                <Profile/>
            </Route>

            <Route exact path='/logout'>
                <LoggedOut/>
            </Route>

            <Route exact path='/register'>
                <RegisterForm/>
            </Route>

        </Switch>
    )
}

export default Routes;