import React from 'react';

const projects = [
    {
        title: 'Octane Brand Pages',
        description: 'As part of my role at LAAM, I led the development of dynamic brand page templates...',
        link: 'https://rangehaya.com/',
        video: 'https://www.youtube.com/watch?v=zL6f82NzVcQ', // Standard YouTube video
        techStack: ['Vue.js', 'Node.js', 'Express', 'REST APIs'],
    },
    {
        title: 'Shared Expense App',
        description: 'Engineered a React Native application for managing shared expenses...',
        link: 'https://github.com/Musira354/SPLIT-v1',
        video: 'https://www.youtube.com/shorts/Z6B7N_JtywM', // YouTube Shorts link
        techStack: ['React Native', 'Firebase', 'JavaScript', 'Expo'],
    },
    {
        title: 'E-commerce Web App',
        description: 'Created a full e-commerce app with React, leveraging Axios to optimize API requests...',
        link: 'https://63f2201c5175e46c55239ac3--taupe-selkie-b8cc7a.netlify.app/',
        video: 'https://www.youtube.com/watch?v=6aLoFdEvoZY', // Standard YouTube video
        techStack: ['React', 'Axios', 'Node.js', 'Express', 'Redux'],
    },
];

function getEmbedUrl(url) {
    if (url.includes("watch?v=")) {
        return url.replace("watch?v=", "embed/");
    } else if (url.includes("shorts/")) {
        return url.replace("shorts/", "embed/");
    }
    return url;
}

function isYouTubeLink(url) {
    return url.includes("youtube.com") || url.includes("youtu.be");
}

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
                                    {isYouTubeLink(project.video) ? (
                                        <iframe
                                            width="100%"
                                            height="250"
                                            src={getEmbedUrl(project.video)}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <video controls width="100%">
                                            <source src={project.video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                </div>
                            )}

                            <a href={project.link} className="block mt-4 text-blue-600 hover:underline">
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
