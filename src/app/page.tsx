function heroSection() {
  return (
    <div className="max-w-2xl text-center mb-12">
        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 tracking-wide uppercase text-sm">Welcome</p>
        <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4 leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Kenneth Heenatigala</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Full Stack Developer</p>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
          I provide solutions for businesses with modern technologies. Passionate about creating efficient, user-friendly solutions.
        </p>
      </div>
  );
}

function GitHubIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512" aria-hidden="true">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
    </svg>
  );
}

function contactLinks() {
  const contacts = [
    { type: "GitHub", url: "https://github.com/kennyheena", Icon: GitHubIcon },
    { type: "LinkedIn", url: "https://www.linkedin.com/in/kennyheena/", Icon: LinkedInIcon }
  ];

  return (
    <div id="contact-me" className="w-full my-12">
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
  const skillGroups = [
    { title: "Languages", items: ["JavaScript", "TypeScript", "Objective-C", "PHP", "HTML", "CSS", "SQL"] },
    { title: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "React Bootstrap", "Semantic UI"] },
    { title: "Backend", items: ["Node.js", "Express.js", "Zend Framework", "RESTful APIs"] },
    { title: "Databases", items: ["MySQL", "MSSQL Server", "MongoDB"] },
    { title: "Cloud & DevOps", items: ["EC2", "S3", "Lambda", "RDS", "Amplify", "ELB"] },
    { title: "Tools & Testing", items: ["Git", "Docker", "Postman", "VS Code", "Shopify", "Jest"] }
  ];

  return (
    <div className="w-full my-8">
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
    { name:"Anu Cakes", type: "ReactJS/AWS", description: "Cake website for an small business", link: "https://anucakes.lk", image: "/anucakes_ss.jpg" }
    // { name:"Contractor Management Portal", type: "ReactJS/AWS", description: "Track and manage external contractor work", link: "https://jobs.sipvittoria.com", image: "/contractorManagementPortal_ss.jpg" }
  ]

  return (
    <div className="w-full my-8">
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
    <footer className="w-full bg-gray-100 dark:bg-gray-800 text-white py-8 px-4">
      <div className="w-full mx-auto text-center">
        <p>Copyright © Kenneth Heenatigala {currentYear}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
  <div className="w-full bg-white dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center py-80 px-4 bg-white dark:bg-gray-900">
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
