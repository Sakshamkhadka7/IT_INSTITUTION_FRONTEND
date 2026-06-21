import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaBriefcase, FaStar } from "react-icons/fa";

const HomeHeroSection4 = () => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.1,
      },
    }),
  };

  const cards = [
    {
      icon: (
        <FaUserGraduate className="text-5xl text-indigo-600 mx-auto mb-4" />
      ),
      value: "5,000+",
      title: "Students Trained",
      color: "bg-indigo-600",
    },
    {
      icon: <FaBriefcase className="text-5xl text-green-600 mx-auto mb-4" />,
      value: "85%",
      title: "Placement Rate",
      color: "bg-green-600",
    },
    {
      icon: <FaStar className="text-5xl text-yellow-500 mx-auto mb-4" />,
      value: "4.8/5",
      title: "Student Rating",
      color: "bg-yellow-500",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-12 space-y-3"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Success Stories
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Proven results that show our impact in education and career growth.
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              y: -5,
            }}
            className="
              bg-white 
              shadow-lg 
              rounded-3xl 
              p-8 
              text-center
              transition-shadow
              hover:shadow-xl
              relative
              overflow-hidden
              "
          >
            <div className={`absolute top-0 left-0 w-full h-1 ${card.color}`} />

            {card.icon}

            <h2 className="text-4xl font-bold text-gray-800">{card.value}</h2>

            <p className="text-gray-600 mt-2">{card.title}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
        text-black
        rounded-3xl 
        p-10 
        text-center 
        shadow-2xl
        "
      >
        <p
          className="
        text-xl 
        md:text-2xl 
        font-medium 
        max-w-3xl 
        mx-auto
        "
        >
          “Over <span className="font-bold">5,000+ students</span> successfully
          trained and placed in top companies through our professional IT
          programs.”
        </p>

        <p className="font-semibold text-lg mt-6">— SoftTraining Academy</p>
      </motion.div>
    </section>
  );
};

export default HomeHeroSection4;
