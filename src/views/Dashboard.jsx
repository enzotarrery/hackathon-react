import React from "react";
import { Outlet } from "react-router-dom";
import CoursesIndex from "../components/Dashboard/blocs/CoursesIndex";
import Navigation from "../components/Dashboard/navigation/Navigation";

const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <div className="content">
        {/* dashboard moniteur - accueil */}
        <CoursesIndex />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
