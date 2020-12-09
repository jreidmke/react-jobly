import { useEffect, useState } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';
import { v4 as uuid_v4 } from "uuid";
import { useContext } from "react";
import UserContext from "./UserContext";

const JobList = () => {
    const { user } = useContext(UserContext);

    const [jobs, setJobs] = useState([]);
    const [applied, setApplied] = useState(user.applications);

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
        let resp = await JoblyApi.applyToJob(user.username, jobId);
        console.log(resp);
        // setJobs(j => j.map(job => job.id===jobId ? {...job, isActive: resp} : job));
    }

    return(
        <div>
            {jobs ? jobs.map((j, idx) =>
            <JobCard
            title={j.title}
            salary={j.salary}
            equity={j.equity}
            company_handle={j.company_handle}
            key={uuid_v4()}
            handleApply={() => apply(idx)}
            />
            ) : 'Loading...'}
        </div>
    )
}

export default JobList;