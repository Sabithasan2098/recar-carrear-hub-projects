import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  // Donst do it on big or real project
  const [dataLength, setDataLength] = useState([4]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="mt-10 mb-5">
      <h1 className="text-center font-bold text-5xl">Featured Jobs</h1>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-2 gap-14 mt-10">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="text-center">
        <div className={dataLength === jobs.length  ? "hidden" : ""}>
          <button
            className="bg-purple-600 text-white px-5 py-2 rounded mt-4"
            onClick={() => setDataLength(jobs.length)}
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
