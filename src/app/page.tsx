import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

class TechnicalSkills {
  skillGroups = [
    { title: "Languages", items: ["JavaScript", "TypeScript", "Objective-C", "PHP", "HTML", "CSS", "SQL"] },
    { title: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "React Bootstrap", "Semantic UI"] },
    { title: "Backend", items: ["Node.js", "Express.js", "Zend Framework", "RESTful APIs"] },
    { title: "Databases", items: ["MySQL", "MSSQL Server", "MongoDB"] },
    { title: "Cloud & DevOps", items: ["EC2", "S3", "Lambda", "RDS", "Amplify", "ELB"] },
    { title: "Tools & Testing", items: ["Git", "Docker", "Postman", "VS Code", "Shopify", "Jest"] }
  ];

  getAll() {
    return this.skillGroups;
  }
}


function navbar() {

  return (
    <header id="home">
      <nav className="w-full bg-gray-100 dark:bg-gray-800 text-white p-5 px-8 fixed top-0 left-0 z-50 shadow-md">
        <ul>
          <li className="float-left mr-5 hover:text-blue-600 dark:text-white text-black"><a href="#home">Home</a></li>
          <li className="float-left mr-5 hover:text-blue-600 dark:text-white text-black"><a href="#skills">Skills</a></li>
          <li className="float-left mr-5 hover:text-blue-600 dark:text-white text-black"><a href="#projects">Projects</a></li>
        </ul>
        <a href="https://github.com/kennyheena/my-portfolio" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="float-right text-black dark:text-white hover:text-blue-600 transition-colors">
        <FaGithub className="w-6 h-6" />
        </a>
      </nav>
    </header>
  );
}

function heroSection() {
  return (
    <div className="max-w-2xl text-center mb-25">
        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 tracking-wide uppercase text-sm">Welcome</p>
        <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4 leading-tight">
          Hi, I'm <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Kenny</span>
        </h1>
        <img className="rounded-full block mx-auto w-30 h-30 mb-5" src="./logo.jpg"></img>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Software Engineer</p>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
          I provide solutions for businesses with modern technologies. Passionate about creating efficient, user-friendly solutions and learning new technologies.
        </p>
      </div>
  );
}

function GitHubIcon() {
  return (
    <FaGithub />
  );
}

function LinkedInIcon() {
  return (
    <FaLinkedin />
  );
}

function contactLinks() {
  const contacts = [
    { type: "GitHub", url: "https://github.com/kennyheena", Icon: GitHubIcon },
    { type: "LinkedIn", url: "https://www.linkedin.com/in/kennyheena/", Icon: LinkedInIcon }
  ];

  return (
    <div className="w-full mb-25">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {contacts.map(({ type, url, Icon }) => (
          <a
            key={type}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={type}
            className="flex items-center gap-3 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors w-max"
          >
            <span className="text-blue-600 dark:text-blue-400"><Icon /></span>
            <span className="text-gray-800 dark:text-gray-200 font-medium">{type}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function listTechnicalSkills() {
  const skills = new TechnicalSkills();
  const skillGroups = skills.getAll();

  return (
    <div id="skills" className="w-full mb-25">
      <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {skillGroups.map((group) => (
          <div key={group.title} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-3">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


function featuredProjects() {
  const projects = [
    { name:"Anu Cakes", type: "ReactJS - Bootstrap - AWS Amplify", description: "Cake website for an small business. Ability to view their gallery and enquire about cakes via Email or social media", link: "https://anucakes.lk", image: "/anucakes_ss.jpg" },
    { name:"Contractor Management Portal", type: "ReactJS - Bootstrap - AWS EC2", description: "Track and manage external contractor work for vittoria coffee service sector. Consist of features such as tracking of the hours, location restrictions and email job information with attached multimedia", link: "https://jobs.sipvittoria.com", image: "/contractorManagementPortal_ss.jpg" }
  ]

  return (
    <div id="projects" className="w-full mb-25">
      <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">{project.name}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{project.type}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
    </div>
  );
}

function footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-800 p-5 bottom-0 fixed">
      <div className="w-full mx-auto text-center">
        <p className="dark:text-white text-black">Copyright © Kenneth Heenatigala {currentYear}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
  <div className="w-full bg-white dark:bg-gray-900">
    {/* NAVBAR/ HEADER */}
    {navbar()}
    <div className="flex flex-col items-center justify-center py-60 px-4 bg-white dark:bg-gray-900">
    {/* HERO SECTION */}
      {heroSection()}
    {/* MAIN CONTENT */}
      {contactLinks()}
      {listTechnicalSkills()}
      {featuredProjects()}
    {/* FOOTER (Copyright, Links) */}
      {footer()}
    </div>
  </div>
  );
}
