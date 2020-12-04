import JoblyApi from './JoblyApi';
import {useEffect, useState} from 'react';

const CompanyList = () => {
    const [companies, setCompanies] = useState('pizza');

    useEffect(() => {
        async function getCompanies() {
            const compRes = await JoblyApi.allCompanies();
            setCompanies(compRes);
        }
        getCompanies();
        console.log(companies);
    }, []);


    return(
        <div>
            {companies ? companies[0].description : 'Loading...'}
        </div>
    )
}

export default CompanyList;

    // const companies = await JoblyApi.allCompanies();

    // console.log(companies);