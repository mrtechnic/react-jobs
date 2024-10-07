import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import "./index.css";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import JobsPage from "./Pages/JobsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import JobPage from "./Pages/JobPage";
import AddJobPage from "./Pages/AddJobPage";
import EditJobPage from "./Pages/EditJobPage";
const App = () => {
  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`http://localhost:5000/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  // Update Job
  const updateJob = async (job) => {
    const res = await fetch(`http://localhost:5000/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(Job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
        />
        <Route path="/jobs/:id" element={<JobPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
