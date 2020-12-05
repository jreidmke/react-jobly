import JoblyApi from './JoblyApi';
import {useEffect, useState} from 'react';
import CompanyCard from './CompanyCard';
import SearchBar from './SearchBar';

const CompanyList = () => {
    const [companies, setCompanies] = useState(null);

    useEffect(() => {
        async function getCompanies() {
            const compRes = Array.from(await JoblyApi.allCompanies());
            setCompanies(compRes);
        }
        getCompanies();
    }, []);

    const addCo = (x) => {
        console.log(x);
    }

    return(
        <div>
            <SearchBar handleSearch={addCo}/>

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
