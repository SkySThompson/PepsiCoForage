import React from "react";
import DistributorCard from "./DistributorCard";
import { distributors } from "../mockData";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {distributors.map((distributor) => (
        <DistributorCard key={distributor.name} distributor={distributor} />
      ))}
    </div>
  );
};

export default Dashboard;
