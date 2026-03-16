import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Example job data based on the provided design
  const jobs = [
    {
      id: 1,
      title: "Sr. Sales Manager",
      dept: "Sales & Marketing",
      location: "San Francisco, California",
      salary: "$125k+",
    },
    {
      id: 2,
      title: "Junior Marketing Designer",
      dept: "Sales & Marketing",
      location: "San Francisco, California",
      salary: "$125k+",
    },
    {
      id: 3,
      title: "Digital Marketing Consultant",
      dept: "Sales & Marketing",
      location: "San Francisco, California",
      salary: "$125k+",
    },
    {
      id: 4,
      title: "Sr. Marketing Designer",
      dept: "Sales & Marketing",
      location: "San Francisco, California",
      salary: "$125k+",
    },
  ];

  return (
    <div className="bg-white pt-24 md:pt-32">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-6 mb-12">
        <nav className="flex justify-start text-[10px] tracking-[0.2em] uppercase text-gray-400">
          <Link to="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black font-bold">Careers</span>
        </nav>
      </div>

      <h1 className="text-center text-4xl md:text-5xl font-bold mb-20 tracking-tight">
        Explore the Careers
      </h1>

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-24">
        {/* Left Column: Filter Sidebar */}
        <div className="md:col-span-1 space-y-10">
          <h2 className="text-2xl font-bold tracking-tight">Filter By</h2>

          <div className="space-y-6">
            <FilterSelect label="Job Title" placeholder="Choose job title" />
            <FilterSelect label="Location" placeholder="Choose location" />
            <FilterSelect label="Department" defaultValue="Sales & Marketing" />
          </div>
        </div>

        {/* Right Column: Job Listings */}
        <div className="md:col-span-3 space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-gray-50/50 p-8 md:p-12 group hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2 tracking-tight">
                {job.title}
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                {job.dept} - {job.location} - {job.salary}
              </p>
              <button className="bg-black text-white px-10 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Simple reusable filter component
const FilterSelect = ({ label, placeholder, defaultValue }) => (
  <div className="flex flex-col space-y-2">
    <label className="text-[11px] font-bold uppercase tracking-widest text-black">
      {label}
    </label>
    <select
      className="w-full border border-gray-100 bg-white p-3 text-xs outline-none focus:border-black appearance-none cursor-pointer"
      defaultValue={defaultValue || ""}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {defaultValue && <option value={defaultValue}>{defaultValue}</option>}
    </select>
  </div>
);

export default Careers;
