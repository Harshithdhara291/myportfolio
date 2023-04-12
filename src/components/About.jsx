import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl mt-32 font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
        Hi, my name is Harshith, and I'm graduating Btech final year in JNTUH university in the stream of Electrical engineering, Besides this I am also learning web development in Nxtwave. I have acquired strong technical skills in web development, which includes proficiency in HTML, CSS, JavaScript, and React.
        </p>

        <br />

        <p className="text-xl">
        As a fresher, I am highly motivated and eager to learn and grow in the field of web development. I am passionate about creating engaging and user-friendly web applications that can make a difference in people's lives. I am a team player, always willing to collaborate with others and contribute to the success of the project. 
        </p>
      </div>
    </div>
  );
};

export default About;