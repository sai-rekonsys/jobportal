import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJobs from "../Pages/UpdateJobs";
import Login from "../components/Login";
import JobDetails from "../Pages/JobDetails";
import SignUp from "../components/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {
          path:"/post-job",
          element: <CreateJob />
        },
        {
          path:"/my-job",
          element: <MyJobs />
        },
        {
          path:"/salary",
          element: <SalaryPage />
        },
        {
          path:"/edit-job/:id",
          element: <UpdateJobs />,
          loader: ({params}) => fetch(`http://localhost:5000/all-jobs/${params.id}`)

        },
        {
          path:"/login",
          element: <Login />
        },
        {
          path:"/sign-up",
          element: <SignUp />
        },
        {
          path:"/job/:id",
          element: <JobDetails />
        },



        
        
      ]
    },
  ]);

  export default router;