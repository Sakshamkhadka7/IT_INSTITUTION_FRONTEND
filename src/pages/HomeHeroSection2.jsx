import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaCode, FaHome } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";

const HomeHeroSection2 = () => {

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const cards = [
    {
      icon: <FaBookOpen size={36} className="text-blue-600" />,
      title: "Job-Oriented Curriculum",
      text: "Every course is built around what Nepal's top tech companies actually hire for — not outdated textbook content",
    },
    {
      icon: <FaCode size={36} className="text-green-600" />,
      title: "Real-world Projects",
      text: "Build a portfolio with live projects that solve real problems — the kind employers in Kathmandu want to see.",
    },
    {
      icon: <FaHome size={36} className="text-orange-500" />,
      title: "Internship placement",
      text: "Get matched with an internship in your field within weeks of starting. Gain experience that makes your CV stand out.",
    },
    {
      icon: <FaRocket size={36} className="text-red-500" />,
      title: "Job placement support",
      text: "Resume reviews, mock interviews, LinkedIn optimization, and direct referrals to our 50+ hiring partners in Nepal.",
    },
  ];


  return (
    <section className="flex flex-col space-y-10 overflow-hidden">

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mt-17"
      >
        <h1 className="text-4xl font-bold text-blue-600 text-center">
          Why Chooses Our Institution for Learning
        </h1>
      </motion.div>


      {/* CARDS */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-14">

        {cards.map((card, index) => (

          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: index * 0.05,
            }}
            whileHover={{
              y: -5,
            }}
            className="
              space-y-5 
              p-7 
              rounded-xl 
              shadow-2xl 
              bg-white
              transition-shadow
              hover:shadow-xl
            "
          >

            {/* ICON */}
            <div>
              {card.icon}
            </div>


            <h1 className="font-bold text-xl">
              {card.title}
            </h1>


            <p>
              {card.text}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default HomeHeroSection2;