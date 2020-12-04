import JoblyApi from './JoblyApi';
import {useEffect, useState} from 'react';
import CompanyCard from './CompanyCard';

const CompanyList = () => {
    const [companies, setCompanies] = useState(null);

    useEffect(() => {
        async function getCompanies() {
            const compRes = Array.from(await JoblyApi.allCompanies());
            setCompanies(compRes);
        }
        getCompanies();
    }, []);


    return(
        <div>
            {companies ? companies.map(company => <CompanyCard
    handle={company.handle}
    description={company.description}
    logoUrl={company.logoUrl}
    name={company.name}
    numEmployees={company.numEmployees}
    key={company.handle}/>) : 'Loading...'}
        </div>
    )
}

export default CompanyList;
