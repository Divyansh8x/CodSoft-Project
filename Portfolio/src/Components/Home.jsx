import React from "react";
import HeroImage from "../assets/heroimage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="w-full max-w-screen-lg flex flex-col mx-auto items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center md:w-1/2 md:pr-8 mt-20">
          <h2 className="text-3xl md:text-5xl mt-14 font-bold text-white ">
            I am a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 text-base md:text-lg max-w-md">
            I am a Mechanical Engineering graduate with a passion for frontend
            development, blending analytical thinking with a strong design
            sense. Proficient in frontend technologies, I specialize in crafting
            intuitive and engaging web experiences. Committed to continuous
            growth, I am eager to collaborate with professionals and contribute
            my creativity to deliver outstanding online solutions.
          </p>
          <Link
            to="projects"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Projects
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <img
          loading="lazy"
            src={HeroImage}
            alt="my profile"
            className="w-full h-auto mt-10 rounded-2xl mx-auto md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
