import { useEffect, useState } from 'react';
import JoblyApi from './JoblyApi';
import {useEffect, useState} from 'react';

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
            <h1>This is a Job list.</h1>
        </div>
    )
}

export default JobList;