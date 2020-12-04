import JoblyApi from './JoblyApi';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import CompanyCard from './CompanyCard';

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
            {company ? <CompanyCard
            handle={company.handle}
            description={company.description}
            logoUrl={company.logoUrl}
            name={company.name}
            numEmployees={company.numEmployees}/> : 'Loading...'}
        </div>
    )
}

export default Company;