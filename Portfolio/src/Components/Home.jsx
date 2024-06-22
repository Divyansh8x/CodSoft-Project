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
      <div className="w-full max-w-screen-2xl flex flex-col mx-auto items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center items-center md:items-start md:w-1/2 md:ml-28 pt-14  md:mt-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white sm:mt-32 md:pt-14 text-center md:text-left">
            I am a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 text-sm sm:text-base md:text-lg max-w-lg text-center md:text-left">
            Computer Science Engineer specializing in frontend development. My
            diverse experience enables me to merge technical proficiency with an
            understanding of business needs, fostering growth and innovation
            through technology. With experience in full-stack development, I
            focus on delivering intuitive and effective solutions that meet both
            user and business requirements. My background in Business Analytics
            enhances my ability to translate data into actionable insights,
            allowing for informed decision-making and strategic planning.
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
        <div className="md:w-1/3 mt-10 md:mt-0">
          <img
            loading="eager"
            src={HeroImage}
            alt="my profile"
            className="w-3/4 md:w-full h-auto rounded-2xl mx-auto md:mx-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
