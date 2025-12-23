// TODO : Adding all the skill lists (programming languages to bounce off the screen)
// TODO : Links for github, linkedin, email
// TODO : Projects seciton with templates for projects that I have worked on
// ecommerce, paypal, shopify systems worked on to connect ERP systems
// project immediate.com.au

function listTechnicalSkills() {
  const languages = [
      "JavaScript",
      "TypeScript",
      "Objective-C",
      "PHP",
      "HTML",
      "CSS",
      "SQL"];

    const frontend = [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "React Bootstrap",
      "Semantic UI"
    ];

    const backend = [
      "Node.js",
      "Express.js",
      "Zend Framework",
      "RESTful APIs"
    ];

    const databases = [
      "MySQL",
      "MSSQL Server",
      "MongoDB"
    ];

    const cloud = [
      "EC2",
      "S3",
      "Lambda",
      "RDS",
      "Amplify",
      "ELB"
    ]

    const tools = [
      "Git",
      "Docker",
      "Postman",
      "VS Code"
    ];

    const test = [
      "Jest"
    ];

    const groups = { languages, frontend, backend, databases, cloud, tools, test };
    const allSkills = Object.values(groups).flat();

    return (
    <div className="w-full h-64 relative overflow-hidden my-6">
      {allSkills.map((skill, i) => {
        const dur = 6 + (i % 5) * 0.8; // deterministic duration
        const delay = (i % 7) * 0.25; // deterministic delay
        const size = 48 + (i % 4) * 6;
        const left = `${(i * 13) % 88}%`; // spread across horizontal
        return (
          <span
            key={skill}
            className="bubble absolute text-sm font-medium animate-ping"
            style={{
              left,
              width: `${size}px`,
              height: `${size}px`,
              lineHeight: `${size}px`,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          >
            {skill}
          </span>
        );
      })}
    </div>
  );
    
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 bg-white dark:bg-gray-900">
      <h1 className="text-5xl font-bold text-black dark:text-white">Hello, My name is Kenneth Heenatigala</h1><br />
      <p className="text-gray-500 dark:text-gray-500">Welcome to my portfolio</p>
      {listTechnicalSkills()}
    </div>
  );
}
