import React from "react";


const Skills = () => {
  const techs = [
    {
      id: 1,
      src: 'https://cdn.worldvectorlogo.com/logos/html-1.svg',
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: 'https://www.lansweeper.com/wp-content/uploads/2018/05/ASSET-SOFTWARE-SQL-DATABASE.png',
      title: "SQL",
      style: "shadow-gray-600",
    },
    {
      id: 5,
      src: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 6,
      src: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
        id: 7,
        src: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
        title: "React JS",
        style: "shadow-cyan-600",
      },
    {
      id: 8,
      src: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg',
      title: "VS Code",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      src: 'https://res.cloudinary.com/di4qjlwyr/image/upload/v1680767474/Screenshot_73_g3vjlk.png',
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-120vh sm:py-5 md:p-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;