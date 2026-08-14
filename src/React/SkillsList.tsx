import React, { useState } from "react";

const CategoryIcons = {
  "Web Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),

  "Machine Learning": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2C10.8954 2 10 2.89543 10 4V5H8C6.34315 5 5 6.34315 5 8V10H4C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14H5V16C5 17.6569 6.34315 19 8 19H10V20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20V19H16C17.6569 19 19 17.6569 19 16V14H20C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10H19V8C19 6.34315 17.6569 5 16 5H14V4C14 2.89543 13.1046 2 12 2ZM8 8H16V16H8V8Z"></path>
    </svg>
  ),

  "Computer Architecture": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M9 3H15V5H17C18.1046 5 19 5.89543 19 7V9H21V15H19V17C19 18.1046 18.1046 19 17 19H15V21H9V19H7C5.89543 19 5 18.1046 5 17V15H3V9H5V7C5 5.89543 5.89543 5 7 5H9V3ZM7 7V17H17V7H7ZM9 9H15V15H9V9Z"></path>
    </svg>
  ),

  "Hardware & Software": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M4 4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H11V20H8V22H16V20H13V18H20C21.1046 18 22 17.1046 22 16V6C22 4.89543 21.1046 4 20 4H4ZM4 6H20V16H4V6ZM6 8V14H18V8H6Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Web Development": [
      "Single Page Applications (SPAs)",
      "Landing pages and business websites",
      "Portfolio websites",
      "Frontend development with React and Astro",
    ],

    "Machine Learning": [
      "Machine learning fundamentals",
      "Data preprocessing and analysis",
      "Exploring supervised and unsupervised learning",
      "Currently developing practical ML experience",
    ],

    "Computer Architecture": [
      "Computer organization and architecture",
      "CPU and memory fundamentals",
      "Understanding instruction sets",
      "Hardware and software interaction",
    ],

    "Hardware & Software": [
      "Understanding hardware/software interaction",
      "Operating systems fundamentals",
      "Computer components and peripherals",
      "Low-level computing concepts",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>

      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category as keyof typeof CategoryIcons]}

                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
