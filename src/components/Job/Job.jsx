 
import {HiCurrencyDollar} from "react-icons/hi2";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
const Job = ({job}) => {
    const{id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary} = job;
    return (
        <div className="card card-compact  border-2 p-5 bg-base-100  ">
        <figure><img src={logo} alt={`${company_name}`} /></figure>
        <div className="">
          <h2 className="card-title"> {job_title}</h2>
          <h4>{company_name}</h4>
          <div className="my-4">
          <button className="mr-4 border-2 border-blue-400 px-4 py-2 rounded">{remote_or_onsite}</button><button className="border-2 border-blue-400 px-4 py-2 rounded">{job_type}</button>
          </div>
        <div className="flex items-center"><MdOutlineLocationOn></MdOutlineLocationOn>
            <span className="pr-7">{location}</span>   <HiCurrencyDollar></HiCurrencyDollar> <span>{salary}</span>
        </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Job;