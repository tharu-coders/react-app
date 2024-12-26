import { motion } from 'framer-motion';

const ProjectsPage = () =>
{
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce platform with React, Node.js, and MongoDB",
            image: "/project1.jpg",
            tech: [ "React", "Node.js", "MongoDB", "Tailwind" ],
            liveLink: "#",
            codeLink: "#"
        },
        {
            id: 2,
            title: "Social Media Dashboard",
            description: "Real-time social media analytics dashboard with dynamic charts",
            image: "/project2.jpg",
            tech: [ "Next.js", "Firebase", "Chart.js", "Tailwind" ],
            liveLink: "#",
            codeLink: "#"
        },
        {
            id: 3,
            title: "AI Chat Application",
            description: "Chat application powered by OpenAI's GPT-3 with real-time responses",
            image: "/project3.jpg",
            tech: [ "React", "OpenAI API", "Node.js", "Socket.io" ],
            liveLink: "#",
            codeLink: "#"
        },
        {
            id: 4,
            title: "Portfolio Website",
            description: "Modern portfolio website with smooth animations and dark theme",
            image: "/project4.jpg",
            tech: [ "React", "Framer Motion", "Tailwind", "Vite" ],
            liveLink: "#",
            codeLink: "#"
        }
    ];

    return (
        <div className="relative min-h-screen bg-[#0a192f] pt-20 pb-16">
            {/* Grid Background */ }
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[#0a192f]/90" />
                <svg
                    className="absolute inset-0 w-full h-full opacity-[0.02]"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="100" y2="0" stroke="#64ffda" strokeWidth="0.1" />
                        <line x1="0" y1="20" x2="100" y2="20" stroke="#64ffda" strokeWidth="0.1" />
                        <line x1="0" y1="40" x2="100" y2="40" stroke="#64ffda" strokeWidth="0.1" />
                        <line x1="0" y1="60" x2="100" y2="60" stroke="#64ffda" strokeWidth="0.1" />
                        <line x1="0" y1="80" x2="100" y2="80" stroke="#64ffda" strokeWidth="0.1" />
                        <line x1="0" y1="100" x2="100" y2="100" stroke="#64ffda" strokeWidth="0.1" />
                        <line x1="0" y1="0" x2="0" y2="100" stroke="#64ffda" strokeWidth="0.1" />
                        <line x1="20" y1="0" x2="20" y2="100" stroke="#64ffda" strokeWidth="0.1" />
                        <line x1="40" y1="0" x2="40" y2="100" stroke="#64ffda" strokeWidth="0.1" />
                        <line x1="60" y1="0" x2="60" y2="100" stroke="#64ffda" strokeWidth="0.1" />
                        <line x1="80" y1="0" x2="80" y2="100" stroke="#64ffda" strokeWidth="0.1" />
                        <line x1="100" y1="0" x2="100" y2="100" stroke="#64ffda" strokeWidth="0.1" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative max-w-screen-xl mx-auto px-6">
                {/* Header */ }
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-4xl font-bold text-gray-200">
                        Featured Projects
                    </h2>
                    <div className="flex-grow h-[1px] bg-[#64ffda]/20"></div>
                </div>

                {/* Projects Grid */ }
                <div className="grid md:grid-cols-2 gap-8">
                    { projects.map( ( project, index ) => (
                        <motion.div
                            key={ project.id }
                            initial={ { opacity: 0, y: 20 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            transition={ { duration: 0.5, delay: index * 0.1 } }
                            className="group relative bg-[#112240] rounded-lg overflow-hidden"
                        >
                            {/* Project Image */ }
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={ project.image }
                                    alt={ project.title }
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-[#0a192f]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Project Info */ }
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-200 mb-2 group-hover:text-[#64ffda] transition-colors">
                                    { project.title }
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    { project.description }
                                </p>

                                {/* Tech Stack */ }
                                <div className="flex flex-wrap gap-2 mb-6">
                                    { project.tech.map( ( tech ) => (
                                        <span
                                            key={ tech }
                                            className="text-sm text-[#64ffda] bg-[#64ffda]/10 px-3 py-1 rounded-full"
                                        >
                                            { tech }
                                        </span>
                                    ) ) }
                                </div>

                                {/* Links */ }
                                <div className="flex gap-4">
                                    <a
                                        href={ project.liveLink }
                                        className="text-gray-400 hover:text-[#64ffda] transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo →
                                    </a>
                                    <a
                                        href={ project.codeLink }
                                        className="text-gray-400 hover:text-[#64ffda] transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Code →
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ) ) }
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;