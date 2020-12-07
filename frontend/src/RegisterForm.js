import JoblyApi from './JoblyApi';
import React, { useState } from "react";

const RegisterForm = ({setToken}) => {
    const INITIAL_STATE = {
        username: "",
        password: "",
        first_name,
        last_name,
        email
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
        } catch (error) {
            console.log(error)
        }

        // setToken({...formData});
        setFormData(INITIAL_STATE);
        window.location.replace("http://localhost:3000");
    };


    return(
        <div>
            <form onSubmit={submit}>

                <label htmlFor="username">Username</label>
                <input
                onChange={handleChange}
                type='text'
                name='username'
                value={formData.company}
                id='username'/>

                <label htmlFor="password">Password</label>
                <input
                onChange={handleChange}
                type='password'
                name='password'
                value={formData.company}
                id='password'/>

                <label htmlFor="first_name">First Name</label>
                <input
                onChange={handleChange}
                type='text'
                name='first_name'
                value={formData.company}
                id='first_name'/>

                <label htmlFor="last_name">Last Name</label>
                <input
                onChange={handleChange}
                type='text'
                name='last_name'
                value={formData.company}
                id='last_name'/>

                <label htmlFor="email">Email</label>
                <input
                onChange={handleChange}
                type='email'
                name='email'
                value={formData.company}
                id='email'/>

                <button>Submit</button>

            </form>
        </div>
    )
}

export default RegisterForm;
