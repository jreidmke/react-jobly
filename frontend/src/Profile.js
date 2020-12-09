import JoblyApi from './JoblyApi';
import React, { useState, useContext } from "react";
import UserContext from "./UserContext";

const ProfileForm = () => {
    const { user, setUser } = useContext(UserContext);

    const INITIAL_STATE = {
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
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
        const userResp = await JoblyApi.updateUser(user.username, formData);
        setFormData({
            firstName: userResp.firstName,
            lastName: userResp.lastName,
            email: userResp.email,
            password: ""
        });
        setUser(userResp);
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