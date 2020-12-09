import JoblyApi from './JoblyApi';
import React, { useState } from "react";
import {Link} from 'react-router-dom'

const LoginForm = () => {
    const INITIAL_STATE = {
        username: "",
        password: ""
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    async function submit(e) {
        e.preventDefault();
        let token;
        try {
            token = await JoblyApi.login(formData);
            localStorage.setItem("_token", token);
        } catch (error) {
            console.log(error)
        }

        setFormData(INITIAL_STATE);
        window.location.replace("http://localhost:3000");
    };


    return(
        <div>
            <Link to='/register'>New User? Register Here!</Link>
            <form onSubmit={submit}>
                <label htmlFor="username">Username</label>
                <input
                onChange={handleChange}
                type='text'
                name='username'
                value={formData.username}
                id='username'/>

                <label htmlFor="password">Password</label>
                <input
                onChange={handleChange}
                type='password'
                name='password'
                value={formData.password}
                id='password'/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;
