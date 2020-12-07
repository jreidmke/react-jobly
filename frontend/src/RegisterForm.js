import JoblyApi from './JoblyApi';
import React, { useState } from "react";

const RegisterForm = () => {
    const INITIAL_STATE = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
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
            token = await JoblyApi.register(formData);
        } catch (error) {
            console.log(error)
        }
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
                value={formData.username}
                id='username'/>

                <label htmlFor="password">Password</label>
                <input
                onChange={handleChange}
                type='password'
                name='password'
                value={formData.password}
                id='password'/>

                <label htmlFor="firstName">First Name</label>
                <input
                onChange={handleChange}
                type='text'
                name='firstName'
                value={formData.firstName}
                id='firstName'/>

                <label htmlFor="lastName">Last Name</label>
                <input
                onChange={handleChange}
                type='text'
                name='lastName'
                value={formData.lastName}
                id='lastName'/>

                <label htmlFor="email">Email</label>
                <input
                onChange={handleChange}
                type='email'
                name='email'
                value={formData.email}
                id='email'/>

                <button>Submit</button>

            </form>
        </div>
    )
}

export default RegisterForm;
