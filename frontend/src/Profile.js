import JoblyApi from './JoblyApi';
import React, { useState } from "react";

const ProfileForm = () => {
    const INITIAL_STATE = {
        firstName: "",
        lastName: "",
        email: "",
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
        user = await JoblyApi.updateUser(formData);
        setFormData({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: ""
        });
    }

    return(
        <div>
            <form onSubmit={submit}>

                <label htmlFor="firstName">First Name</label>
                <input
                onChange={handleChange}
                type='text'
                name='firstName'
                value={formData.username}
                id='firstName'/>

                <label htmlFor="lastName">Last Name</label>
                <input
                onChange={handleChange}
                type='text'
                name='lastName'
                value={formData.username}
                id='lastName'/>

                <label htmlFor="email">Email</label>
                <input
                onChange={handleChange}
                type='email'
                name='email'
                value={formData.username}
                id='email'/>

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

export default ProfileForm;