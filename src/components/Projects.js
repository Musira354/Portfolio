import React from 'react';

const projects = [
    {
        title: 'Octane Brand Pages',
        description: 'As part of my role at LAAM, I led the development of dynamic brand page templates, ensuring a seamless and engaging user experience. I built the UI components, including the navbar, menus, hero banner, cards, contact section, and footer, all powered by dynamic data fetched from databases. On the backend, I developed and optimized APIs using Node.js to efficiently serve data to the frontend. Additionally, I enhanced existing APIs to improve performance and scalability. On the frontend, I utilized Vue.js to create a responsive and interactive interface, while implementing optimizations to significantly improve page load speed. This project showcases my ability to deliver end-to-end solutions, from UI design and API development to performance optimization.',
        link: 'https://rangehaya.com/',
        video: '/brand-page.mov', // Add the video path here
        techStack: ['Vue.js', 'Node.js', 'Express', 'REST APIs', 'JavaScript', 'HTML/CSS', 'PostgreSQL'], // Add tech stack
    },

    {
        title: 'Shared Expense App',
        description: 'Engineered a React Native application for managing shared expenses, integrating Firebase to facilitate real-time updates and streamline receipt management, resulting in users completing transactions 10% faster than previous methods.',
        link: 'https://github.com/Musira354/SPLIT-v1',
        video: '/shared-expense-demo.mp4', // Add the video path here
        techStack: ['React Native', 'Firebase', 'JavaScript', 'Expo'], // Add tech stack
    },
    {
        title: 'E-commerce Web App',
        description: 'Created a full e-commerce app with React, leveraging Axios to optimize API requests. Prioritized Ul code optimizations that reduced rendering time from four seconds to 1.8 seconds for over 5 major components.',
        link: 'https://63f2201c5175e46c55239ac3--taupe-selkie-b8cc7a.netlify.app/',
        video: '/unfaded.mov', // Add the video path here
        techStack: ['React', 'Axios', 'Node.js', 'Express', 'Redux'], // Add tech stack
    },
    // Add more projects here
];

function Projects() {
    return (
        <section className="py-20 bg-white" id="projects">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                            <p className="mt-2 text-gray-600">{project.description}</p>
                            {project.techStack && (
                                <div className="mt-4">
                                    <h4 className="text-lg font-semibold text-gray-700">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {project.video && (
                                <div className="mt-4">
                                    <video controls width="100%">
                                        <source src={project.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            )}
                            <a
                                href={project.link}
                                className="block mt-4 text-blue-600 hover:underline"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;