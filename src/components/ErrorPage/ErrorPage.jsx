import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center items-center">
      <h1>Oops sorry</h1>
      <p>No data found in this page</p>
      <NavLink  to={"/"}>
        <button className="mt-10">Back to Home</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
