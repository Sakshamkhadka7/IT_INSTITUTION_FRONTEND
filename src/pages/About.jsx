import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
const About = () => {
  const API = import.meta.env.VITE_API_URL;
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(false);

  const getInstructors = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${API}/api/v1/student/getInstructor`, {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        setInstructors(data?.data || []);
        console.log(data.data);
      } else {
        toast.error(data?.message || "Failed to fetch instructors");
      }
    } catch (error) {
      console.log("Error occured at a About page", error);
      toast.error("Network error while fetching instructors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInstructors();
  }, []);

  return (
    <div className="p-10 md:p-17 space-y-40">
      <div className="flex flex-col space-y-20 md:flex-row justify-between items-center  gap-2 space-x-8">
        <div className="flex flex-col space-y-3 justify-center  ">
          <h1 className="text-xl text-blue-400 font-semibold">About us</h1>
          <p className="text-2xl md:text-5xl text-blue-950 font-bold">
            Empowering students by offering most offordable <br /> courses
            through practical learning{" "}
          </p>
        </div>

        <div className="flex flex-col gap-7">
          <p className="text-lg md:text-xl font-semibold">
            At SoftTraning , we believe everyone deserves the oppurtunity to
            learn , <br /> no matter who they are where they live , This
            institution helps student grow by learning only practical skills
            that need in a market
          </p>

          <div className="flex items-center gap-2 border px-6 py-2 w-60 bg-blue-400 text-white hover:cursor-pointer hover:bg-blue-950">
            <button className="text-xl">Get Course</button>
            <FaArrowRight size={25} />
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-20 md:flex-row  items-center justify-between">
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-2xl md:text-4xl text-blue-950 font-bold">
            About SoftTraninig
          </h1>
          <div className="space-y-5 font-semibold">
            <p className="text-lg md:text-xl">
              Across years of growth, collaboration and change, our mission has{" "}
              <br /> been to empower learners and <br /> educators through open
              and inclusive learning solutions.
            </p>
            <p className="text-lg md:text-xl">
              This is why Moodle LMS remains open source, built by and for the{" "}
              <br /> community to ensure freedom, flexibility, and continuous{" "}
              <br /> innovation
            </p>
            <p className="text-lg md:text-xl">
              Our eLearning products now include Moodle Workplace,
              <br /> MoodleCloud, the Moodle App and Moodle Academy, which{" "}
              <br /> collectively serve half a billion users on registered
              Moodle sites <br /> all over the world
            </p>
          </div>
        </div>

        <img src="bcsit1.png" className="md:h-110 md:w-115" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          loading ? <Loading/> :
           instructors?.map((inst) => (
    <div
      key={inst._id}
      className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden 
      hover:shadow-xl transition-all duration-300 group"
    >
      
      <div className="relative h-72 overflow-hidden">
        <img
          src={inst.avatar}
          alt={inst.fullName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h2 className="text-white text-xl font-bold">
            {inst.fullName}
          </h2>
          <p className="text-gray-200 text-sm">
            {inst.role}
          </p>
        </div>
      </div>

      <div className="p-5 space-y-3">

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Qualification
          </p>
          <p className="text-gray-800 font-medium">
            {inst.qualification}
          </p>
        </div>


        <div>
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Email
          </p>
          <p className="text-gray-700 text-sm break-all">
            {inst.email}
          </p>
        </div>


        <div>
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Contact
          </p>
          <p className="text-gray-700 font-medium">
            {inst.phone}
          </p>
        </div>


        <button
          className="w-full mt-3 py-2 rounded-lg bg-black text-white 
          hover:bg-gray-800 transition"
        >
          View Profile
        </button>

      </div>
    </div>
  ))
        }
</div>
    </div>
  );
};

export default About;
