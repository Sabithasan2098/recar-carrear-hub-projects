const getStoredIteam = () => {
  const storedJobApplication = localStorage.getItem("Apply Job Application");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};
const saveApplication = (id) => {
  const storedJobApplication = getStoredIteam();
  const exits = storedJobApplication.find((jobId) => jobId === id);
  if (!exits) {
    storedJobApplication.push(id);
    localStorage.setItem("Apply Job Application", JSON.stringify(storedJobApplication))
  }
};

export  {getStoredIteam, saveApplication}
