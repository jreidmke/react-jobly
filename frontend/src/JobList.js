import { useEffect, useState } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';

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
            />
            ) : 'Loading...'}
        </div>
    )
}

export default JobList;