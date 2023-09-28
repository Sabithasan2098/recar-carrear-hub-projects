import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredIteam } from "../Utilitis/LocalStorege";

const Jobs = () => {
  const jobs = useLoaderData();
  const [jobsApplyed, setJobsApplyed] = useState([]);
  const [displayJobs,setDisplayJobs] = useState([]);
  const handleDisplayJobs = filter =>{
    if(filter === 'all'){
        setDisplayJobs(jobsApplyed)
    }
    else if(filter === 'remote'){
        const remoteJob = jobsApplyed.filter(job => job.remote_or_onsite === 'Remote')
        setDisplayJobs(remoteJob)
    }
    else if(filter === 'onsite'){
        const  onsiteJob = jobsApplyed.filter(job => job.remote_or_onsite === 'Onsite')
        setDisplayJobs(onsiteJob)
    }
  }
  useEffect(() => {
    const applyedJobs = getStoredIteam();
    const jobsApply = [];
    for (const id of applyedJobs) {
      const job = jobs.find((job) => job.id === id);
      if (job) {
        jobsApply.push(job);
        setJobsApplyed(jobsApply);
        setDisplayJobs(jobsApply)
      }
    }
  }, [jobs]);

  return (
    <div> 
      <div className="text-right">
        <details className="dropdown mb-32">
          <summary className="m-1 btn">open or close</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleDisplayJobs('all') }>
              <a>All</a>
            </li>
            <li onClick={() => handleDisplayJobs('remote') }>
              <a>Remote</a>
            </li>
            <li onClick={() => handleDisplayJobs('onsite') }>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <ul>
        {displayJobs.map((job) => (
          <li className="bg-yellow-100 p-4 m-5" key={job.id}>
            {job.job_title} <br /> {job.company_name} <br />
            {job.remote_or_onsite}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
