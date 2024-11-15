// Skills.js
import React from 'react';
import SkillCard from './Skillcard'; // Import the SkillCard component

function Skills() {
    // skillData.js
 const skillData = [
    
    {
      name: "HTML5",
      logo: "https://www.svgrepo.com/show/452228/html-5.svg",
    },
    {
      name: "CSS3",
      logo: "https://www.svgrepo.com/show/452185/css-3.svg",
    },
    {
      name: "JavaScript",
      logo: "https://www.svgrepo.com/show/452045/js.svg",
     },
    {
      name: "Bootstrap",
      logo: "https://www.svgrepo.com/show/353498/bootstrap.svg",
     },
     {
        name: "ReactJS",
        logo: "https://www.svgrepo.com/show/355190/reactjs.svg",
      },
     {
        name: "TailwindCSS",
        logo: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg",
      },
    {
      name: "Git",
      logo: "https://www.svgrepo.com/show/452210/git.svg",
    },
    {
      name: "GitHub",
      logo: "https://www.svgrepo.com/show/512317/github-142.svg",
    },
    {
      name: "Php",
      logo: "https://www.svgrepo.com/show/354180/php.svg",
    },
    {
      name: "Codeigniter",
      logo: "https://www.svgrepo.com/show/353579/codeigniter.svg",
    },
    {
      name: "Python",
      logo: "https://www.svgrepo.com/show/452091/python.svg",
    },
    {
      name: "Django",
      logo: "https://www.svgrepo.com/show/353657/django-icon.svg",
    },
    {
      name: "MySQL",
      logo: "https://www.svgrepo.com/show/331738/mysql-database.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://www.svgrepo.com/show/354200/postgresql.svg",
     },
     {
        name: "VsCode",
        logo: "https://www.svgrepo.com/show/374171/vscode.svg",
     },
     {
        name: "Chatgpt",
        logo: "https://www.svgrepo.com/show/306500/openai.svg",
      },
     {
        name: "Netlify",
        logo: "https://www.svgrepo.com/show/376339/netlify.svg",
      },
     {
        name: "JQuery",
        logo: "https://www.svgrepo.com/show/452242/jquery.svg",
      },
    // Add more skills as needed
  ];
  
  return (
    <div className="skills-container  bg-black py-20 px-4 lg:py-32 lg:px-32 min-h-screen">
      <h2 className="text-4xl lg:text-7xl font-bold  mb-12 lg:mb-20 text-white">Tech <span className='text-indigo-400'>I Work With.</span></h2>
      <div className="skills-icons grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-2 lg:gap-3">
        {skillData.map((skill, index) => (
          <SkillCard key={index} name={skill.name} logo={skill.logo} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
