import JoblyApi from './JoblyApi';
import {useEffect, useState, useParams} from 'react';

const Company = () => {
    const {handle} = useParams();
    const [company, setCompany] = useState(null);

    useEffect(() => {
        async function getCompany() {
            const company = await JoblyApi.getCompany(handle);
            console.log(company);
            setCompany(company);
        }
    }, []);

    return(
        <div>
            <h1>This is a company.</h1>
        </div>
    )
}

export default Company;