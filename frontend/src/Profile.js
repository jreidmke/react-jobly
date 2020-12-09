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

    const submit = e => {
        e.preventDefault();
    }

    return(
        <div>
            <h1>This is a profile.</h1>
        </div>
    )
}

export default ProfileForm;