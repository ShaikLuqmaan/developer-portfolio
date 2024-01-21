import React from 'react';
import { FaCode, FaReact, FaNodeJs } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

export default function Homepage () {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <animated.div
      style={fadeIn}
      className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
    >
      <h1 className="leading-loose text-3xl md:text-4xl mx-4 mb-2">
        Hi, my name is
      </h1>
      <h1 className="text-4xl md:text-6xl font-extrabold italic text-gray-800 dark:text-gray-100 my-2 bg-green-300 dark:bg-red-500 rounded-md px-2 py-1">
        Luqmaan Shaik
      </h1>

      <h2 className="text-xl md:text-4xl lg:text-6xl mb-4 text-gray-500 dark:text-gray-300">
        I build applications for the web ✈️.
      </h2>
      <div className="flex space-x-4 text-4xl md:text-6xl mt-6">
        <FaReact
          className="hover:text-blue-500 transition duration-300 transform hover:scale-110 cursor-pointer"
          title="React"
        />
        <FaCode
          className="hover:text-yellow-500 transition duration-300 transform hover:scale-110 cursor-pointer"
          title="Code"
        />
        <FaNodeJs
          className="hover:text-green-500 transition duration-300 transform hover:scale-110 cursor-pointer"
          title="Node.js"
        />
      </div>
    </animated.div>
  );
};

