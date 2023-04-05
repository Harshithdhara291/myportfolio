import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hello, I am Harshith Dharavasthu
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I have been learning Web Development in NxtWave and I'm excited to continue growing my skills and pursuing my passion for building websites and web applications.
          </p>

          <div>
            <button
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-600 to-yellow-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src='https://res.cloudinary.com/di4qjlwyr/image/upload/v1680689970/1676304424865_h07d4x.jpg'
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 sm:mb-30 md:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Home