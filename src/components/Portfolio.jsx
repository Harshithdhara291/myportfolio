import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/di4qjlwyr/image/upload/v1680695797/Screenshot_62_hldrru.png',
      code:'https://github.com/Harshithdhara291/nxttrendz004',
      demo:'https://nxttrendz004.ccbp.tech/',
    },{
        id: 2,
        image: 'https://res.cloudinary.com/di4qjlwyr/image/upload/v1680695816/Screenshot_63_xwy5tk.png',
        code:'https://github.com/Harshithdhara291/REACT_IPL_dashboard',
        demo:'https://myipldb.ccbp.tech/',
      },{
        id: 3,
        image: 'https://res.cloudinary.com/di4qjlwyr/image/upload/v1680695834/Screenshot_64_yzd7x1.png',
        code:'https://github.com/Harshithdhara291/booksapp',
        demo:'https://harshithbooks.netlify.app/',
      },{
        id: 4,
        image: 'https://res.cloudinary.com/di4qjlwyr/image/upload/v1680766470/Screenshot_70_jf15yx.png',
        code:'https://github.com/Harshithdhara291/randomQuoteGenerator',
        demo:'https://quotegenerator04.netlify.app/',
      },{
        id: 5,
        image: 'https://res.cloudinary.com/di4qjlwyr/image/upload/v1680765847/Screenshot_68_airlt7.png',
        code:'https://github.com/Harshithdhara291/bmicalculator',
        demo:'https://mybmicalculator.ccbp.tech/',
      },{
        id: 6,
        image: 'https://res.cloudinary.com/di4qjlwyr/image/upload/v1680765831/Screenshot_67_x5rey0.png',
        code:'https://github.com/Harshithdhara291/RockPaperScissors',
        demo:'https://harshrps004.ccbp.tech/',
      },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 self-start">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="sm:mx-10 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {portfolios.map(({ id, image,demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={image}
                alt=""
                className="rounded-md duration-200 md:hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target='_blank' rel="noreferrer" className="flex justify-center items-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo <BsFillArrowUpRightSquareFill className="ml-2"/>
                </a>
                <a href={code} target='_blank' rel="noreferrer" className="flex justify-center items-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code<FaGithub className="ml-2"/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;