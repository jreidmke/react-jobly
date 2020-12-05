import React, { useState } from "react";

const SearchBar = ({ search }) => {
    const INITIAL_STATE = {
        company: ""
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
        search({...formData});
        setFormData(INITIAL_STATE);
    };

    return(
        <div>
            <form onSubmit={submit}>
                <label htmlFor="company">Company</label>
                <input
                onChange={handleChange}
                type='text'
                name='company'
                value={formData.company}
                id='company'/>
            </form>
        </div>
    )
}

export default SearchBar;