import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className="text-3xl text-white font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-base md:text-xl text-gray-300 mt-8">
        As an aspiring Frontend Developer, I am passionate about crafting engaging and user-friendly web experiences. Armed with foundational knowledge in HTML, CSS, and JavaScript, as well as proficiency in React, Bootstrap, Tailwind CSS, and Material-UI, I am eager to learn and adapt to the fast-evolving world of web development. My enthusiasm for design and coding drives me to create clean, responsive, and accessible websites that prioritize user experience.
        </p>

        <br />

        <p className="text-base md:text-xl text-gray-300 ">
        While I may be at the beginning of my journey in the tech industry, I am committed to continuous learning and growth. I am excited to collaborate on new projects and contribute fresh ideas to create innovative digital solutions. Please explore my portfolio to see some of my initial projects and to learn more about my journey into frontend development.
        </p>
      </div>
    </div>
  )
}

export default About
