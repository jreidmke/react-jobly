import JoblyApi from './JoblyApi';
import {useEffect, useState} from 'react';

const CompanyList = () => {
    const [companies, setCompanies] = useState(null);

    useEffect(() => {
        async function getCompanies() {
            const companies = await JoblyApi.allCompanies();
            console.log(companies);
            setCompanies(companies);
        }
        getCompanies();
    }, []);


    return(
        <div>
            {console.log("PZIAJNKSFDL:")}
        </div>
    )
}

export default CompanyList;

    // const companies = await JoblyApi.allCompanies();

    // console.log(companies);