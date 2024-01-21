import React from "react";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj) => (
            <SimpleProjectCard
              title={proj.title}
              link={proj.link}
              description={proj.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const SimpleProjectCard = ({ title, link,description }) => {
  return (
    <a href={link} className="w-full block shadow-2xl transition-transform duration-200 transform hover:shadow-3xl hover:-translate-y-1 rounded-md">
      <div className="relative bg-white dark:bg-gray-800 p-6 h-full">
        <h1 className=" text-3xl text-gray-800  dark:text-white font-bold  bg-green-300 dark:bg-red-500 rounded-md px-2 py-1 inline-block   mb-2">
          {title}
        </h1>
        <h1 className="text-md text-gray-400 dark:text-white-500">
        {description.split('\n').map((desc, index) => (
            <p key={index} className="mt-2">{desc}</p>
          ))}
        </h1>
      </div>
    </a>
  );
};
