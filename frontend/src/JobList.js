import { useEffect, useState } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';
import { v4 as uuid_v4 } from "uuid";

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

    async function apply(jobIdx) {
        let jobId = jobs[jobIdx].id;
        
    }

    return(
        <div>
            {jobs ? jobs.map(j =>
            <JobCard
            title={j.title}
            salary={j.salary}
            equity={j.equity}
            company_handle={j.company_handle}
            key={uuid_v4()}
            handleApply={apply}
            />
            ) : 'Loading...'}
        </div>
    )
}

export default JobList;