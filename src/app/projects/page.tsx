import React from "react";

// Define a type for the project structure
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string; // Add a link property for project URL
};

const Work: React.FC = () => {
  // Array of projects containing the project details
  const projects: Project[] = [
    {
      id: 1,
      title: "Resume Builder",
      description: " A dynamic resume builder allowing users to create and customize resumes with multiple templates.",
      image: "/resume-builder.png", // Placeholder image (Replace with actual image URL)
      link: "https://muhsinullah.github.io/Muhsinullah-Dynamic-Resume-Builder/", // Link to project details or live demo
    },
    {
      id: 2,
      title: "Clothing Website",
      description:"A simple, responsive clothing website designed with HTML, CSS, and JavaScript.",
      image: "/cloth-web.png", // Placeholder image
      link: "https://muhsinullah.github.io/cloth-shopping/", // Link to project details or live demo
    },
    {
      id: 3,
      title: "SMIT Web Clone",
      description:"A responsive clone of the Saylani Foundation website, built using HTML, CSS, and JavaScript",
      image: "/saylani-web-clone.png", // Placeholder image
      link: "https://muhsinullah.github.io/saylani_front_12/", // Link to project details or live demo
    },
    {
      id: 4,
      title: "Project 4",
      description:
        "A dashboard for managing company data with dynamic charts and data visualizations.",
      image: "/Calculator.png", // Placeholder image
      link: "https://muhsinullah.github.io/calculators-main/", // Link to project details or live demo
    },
    {
      id: 5,
      title: "Shopping",
      description:
        "A E-commerce website featuring product filtering based on categories, built using JavaScript and TypeScript.",
      image: "/Text-Editor.png", // Placeholder image
      link: "https://muhsinullah.github.io/rich-text-editor-main/", // Link to project details or live demo
    },
    {
      id: 6,
      title: "Project 6",
      description:
        "A personal portfolio website with interactive animations using CSS and JavaScript.",
      image: "/product-filter.png", // Placeholder image
      link: "https://muhsinullah.github.io/Product_Filter_And_Search-main/", // Link to project details or live demo
    },
  ];

  return (
    // Main container 
    <div className="min-h-screen bg-gray-900 py-12">
      {/* Content is centered and responsive with max width and horizontal padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page heading ka center kia hai pr fonts bi large dia hai */}
        <h1 className="text-4xl font-bold text-center mb-12">My Work</h1>

        {/* Grid container ko yaha set kia hai  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            // har project card ko shadow or rounded corners yahan se ki hai
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden"
            >
              {/* Project ka image cover hojyga jo hamne usy ak fix size ia hai */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-45 object-cove rounded-xl"
              />

              <div className="p-1 max-h-25">
                <h2 className="text-gray-900 text-xl font-semibold ">{project.title}</h2>

                <p className="text-gray-600 text-sm">{project.description}</p>

                {/* "Learn More" link with hover effect */}
                <a
                  href={project.link} // yaha link ki property use ki hai mene
                  className="mt-0 inline-block text-blue-500 hover:text-blue-700 font-medium"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
