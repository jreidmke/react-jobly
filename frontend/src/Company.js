import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { v4 as uuid_v4 } from "uuid";

import JoblyApi from './JoblyApi';
import CompanyCard from './CompanyCard';
import JobCard from './JobCard';

const Company = () => {
    const { handle } = useParams();
    const [company, setCompany] = useState(null);
    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        async function getCompany() {
            const company = await JoblyApi.getCompany(handle);
            setCompany(company);
        }
        getCompany();
        async function getJobs() {
            const jobs = await JoblyApi.getJobsByCompany(handle);
            setJobs(jobs);
        }
        getJobs();
    }, []);


    return(
        <div>
            {company ? <CompanyCard
            handle={company.handle}
            description={company.description}
            logoUrl={company.logoUrl}
            name={company.name}
            numEmployees={company.numEmployees}
            key={company.handle}/> : 'Loading...'}

            {jobs ? jobs.map(j =>
            <JobCard
            title={j.title}
            salary={j.salary}
            equity={j.equity}
            company_handle={handle}
            key={uuid_v4()}
            />) :
            'Loading...'}
        </div>
    )
}

export default Company;