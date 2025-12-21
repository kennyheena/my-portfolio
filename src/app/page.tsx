// TODO : Adding all the skill lists (programming languages to bounce off the screen)
// TODO : Links for github, linkedin, email
// TODO : Projects seciton with templates for projects that I have worked on
// ecommerce, paypal, shopify systems worked on to connect ERP systems
// project immediate.com.au

function listTechnicalSkills() {
  const programmingLanguages = [
    "JavaScript",
    "TypeScript",
    "Objective-C",
    "PHP",
    "HTML",
    "SQL"];

    return (
      <ul className="list-disc list-inside text-left">
        {programmingLanguages.map((programmingLanguages) => (
          <li key={programmingLanguages} className="text-gray-700 dark:text-gray-300">{programmingLanguages}</li>
        ))}
      </ul>
    );
    
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 bg-white dark:bg-gray-900">
      <h1 className="text-5xl font-bold text-black dark:text-white">Hello, My name is Kenneth Heenatigala</h1><br />
      <p className="text-gray-500 dark:text-gray-500">Welcome to my portfolio</p>
      <h2 className="text-3xl font-semibold text-black dark:text-white mt-8">Programming Languages</h2>
      {listTechnicalSkills()}
    </div>
  );
}
