import JoblyApi from './JoblyApi';
import {useEffect, useState} from 'react';
import CompanyCard from './CompanyCard';

const CompanyList = () => {
    const [companies, setCompanies] = useState('pizza');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getCompanies() {
            const compRes = Array.from(await JoblyApi.allCompanies());
            setCompanies(compRes);
            setLoading(false);
        }
        getCompanies();
    }, []);


    return(
        <div>
            {!loading ? companies.map(company => <CompanyCard
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
