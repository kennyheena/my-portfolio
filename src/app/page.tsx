// TODO : Adding all the skill lists (programming languages to bounce off the screen) - done
// TODO : Links for github, linkedin, email - done
// TODO : Work history section with companies worked for, roles and responsibilities
// TODO : Projects seciton with templates for projects that I have worked on
// ecommerce, paypal, shopify systems worked on to connect ERP systems
// project immediate.com.au

function navbar() {
  const navItems = [
    { label: "About me", id: "about-me" },
    { label: "Projects & Experience", id: "projects-experience" },
    { label: "Contact me", id: "contact-me" }
  ];

  return (
    <nav className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-black dark:text-white">KH</h1>
        <div className="flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
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

  console.log(skillGroups);

  return (
    <div className="w-full my-8">
      <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

function contactLinks() {
  const contacts = [
    { type: "GitHub", url: "https://github.com/kennyheena" },
    { type: "LinkedIn", url: "https://www.linkedin.com/in/kennyheena/" }
  ]

  return (
    <div id="contact-me" className="w-full my-8">
      <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Contact Me</h2>
      <div className="flex flex-col space-y-4">
        {contacts.map((contact) => (
          <a
            key={contact.type}
            href={contact.url}
            className="text-blue-600 dark:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.type}
          </a>
        ))}
      </div>
    </div>
  );
}

// function workHisotry() {
//   const work = [
//     {}
//   ] 
// }

function footer() {
  return (
    <footer className="w-full bg-gray-900 dark:bg-black text-white py-8 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gray-400">Copyright © Kenneth Heenatigala 2026. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
  <div className="w-full bg-white dark:bg-gray-900">
    {/* HEADER/NAVBAR (Navigation) */}
    {navbar()}
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 bg-white dark:bg-gray-900">
    {/* HERO SECTION (Large welcome/intro area) / */}
      <div id="about-me" className="max-w-2xl text-center mb-12">
        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 tracking-wide uppercase text-sm">Welcome</p>
        <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4 leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Kenneth Heenatigala</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Full Stack Developer</p>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
          I provide solutions for businesses with modern technologies. Passionate about creating efficient, user-friendly solutions.
        </p>
      </div>
      {listTechnicalSkills()}
    {/* MAIN CONTENT / SECTIONS */}
    {/* FOOTER (Copyright, Links) */}
      {contactLinks()}
      {footer()}
    </div>
  </div>
  );
}
