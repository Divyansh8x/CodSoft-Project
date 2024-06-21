import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-14">
          <p className="text-3xl text-white font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-base md:text-xl text-gray-300 mt-8">
          As an aspiring Frontend Developer, I am passionate about crafting
          engaging and user-friendly web experiences. Armed with foundational
          knowledge in HTML, CSS, and JavaScript, as well as proficiency in
          React, Bootstrap, Tailwind CSS, Material-UI and Node.Js I am eager to
          learn and adapt to the fast-evolving world of web development. My
          enthusiasm for design and coding drives me to create clean,
          responsive, and accessible websites that prioritize user experience.
        </p>

        <br />

        <p className="text-base md:text-xl text-gray-300 ">
          I am adept at building responsive and user-friendly web applications.
          I excel in creating seamless user experiences, optimizing performance,
          and ensuring cross-browser compatibility. My strong foundation in
          computer science principles, including algorithms, data structures,
          and software design patterns, supports my ability to deliver clean,
          maintainable code. I am passionate about leveraging technology to
          solve real-world problems and drive business success. Let’s connect
          and explore opportunities for collaboration in frontend development
          and beyond!
        </p>
      </div>
    </div>
  );
};

export default About;
