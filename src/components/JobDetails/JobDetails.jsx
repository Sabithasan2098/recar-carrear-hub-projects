import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveApplication } from "../Utilitis/LocalStorege";
 

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
   

  const handleApplyJob = () =>{
     saveApplication(idInt)
    toast('You are successfully applyedn')
  }
  return (
    <div>
      <h1>Details of job:{jobs.length}</h1>
      <div className="grid md:grid-cols-5 gap-20 mt-10">
        <div className="border md:col-span-3">
            <h2 className="text-4xl">Text coming soon</h2>
        </div>
        <div className="border md:col-span-2">
            <h4 className="text-3xl">Side text</h4>
            <button onClick={handleApplyJob} className="bg-purple-600 py-3 text-white font-bold  rounded w-full">Apply now</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
