import JoblyApi from './JoblyApi';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const Company = () => {
    const { handle } = useParams();
    const [company, setCompany] = useState(null);

    useEffect(() => {
        async function getCompany() {
            const company = await JoblyApi.getCompany(handle);
            setCompany(company);
        }
        getCompany();
    }, []);

    return(
        <div>
            <h1>This is a company.</h1>
            {company ? company.handle : 'Loading...'}
        </div>
    )
}

export default Company;