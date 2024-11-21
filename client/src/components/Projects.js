import React from 'react';

const projects = [
    {
        title: 'E-commerce Web App',
        description: 'A comprehensive e-commerce solution with a fast, user-friendly UI.',
        link: 'https://63f2201c5175e46c55239ac3--taupe-selkie-b8cc7a.netlify.app/',
    },
    {
        title: 'Shared Expense App',
        description: 'A React Native app for managing shared expenses in real-time.',
        link: 'https://github.com/Musira354/SPLIT-v1',
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
