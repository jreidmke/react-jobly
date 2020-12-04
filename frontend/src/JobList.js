import { useEffect, useState } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';
import { uuid } from 'uuidv4';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function getJobs() {
            const jobResp = await JoblyApi.allJobs();
            console.log(jobResp);
            setJobs(jobResp);
        }
        getJobs();
    }, []);

    return(
        <div>
            {jobs ? jobs.map(j =>
            <JobCard
            title={j.title}
            salary={j.salary}
            equity={j.equity}
            company_handle={j.company_handle}
            key={uuid()}
            />
            ) : 'Loading...'}
        </div>
    )
}

export default JobList;