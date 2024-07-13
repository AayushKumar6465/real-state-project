import React from "react";
import a1 from "../assets/pic/a1.png";
import ab1 from "../assets/pic/ab1.png";

function About() {
  return (
    <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto hover:shadow-2xl">
      <span className="text-pink-800 font-bold text-4xl">
        <h1>About AllSeasons Properties</h1>
      </span>
      <div>
        <p>
          <span className="text-zinc-500">AllSeasons Properties </span>
          is a leading real estate agency that specializes in helping clients
          buy, sell, and rent properties in the most desirable neighborhoods.
          Our experienced agents is dedicated to providing exceptional service
          and making the buying and selling the process as smooth as possible..
        </p>
      </div>
      <div className="p-2 grid place-content-center grid-cols-2 gap-4 mx-auto  flex-5  ">
        <img
          src={a1}
          alt="about us "
          className=" focus-visible  flex items-center p-4 hover:shadow-2xl rounded-lg shadow-pink-800 mr-12 transition duration-300"
        />
        <img
          src={ab1}
          alt="about us "
          className=" focus-visible  flex items-center p-4 rounded-lg hover:shadow-2xl shadow-pink-800 mr-12 transition duration-300"
        />
      </div>
    </div>
  );
}

export default About;
