import { motion } from 'framer-motion';

const Projects = () =>
{
    const projects = [
        {
            id: 1,
            title: "E-commerce Website",
            description: "A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard.",
            tech: [ "React", "Node.js", "MongoDB", "Stripe" ],
            image: "/project1.jpg",
            demo: "https://demo.com",
            code: "https://github.com"
        },
        {
            id: 2,
            title: "Social Media App",
            description: "Real-time social platform with instant messaging, post sharing, and user interactions.",
            tech: [ "React", "Firebase", "Tailwind", "Socket.io" ],
            image: "/project2.jpg",
            demo: "https://demo.com",
            code: "https://github.com"
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "Modern portfolio website with smooth animations and dark theme.",
            tech: [ "React", "Tailwind", "Framer Motion", "Vite" ],
            image: "/project3.jpg",
            demo: "https://demo.com",
            code: "https://github.com"
        }
    ];

    return (
        <div className="relative w-full min-h-screen bg-[#0a192f]">
            {/* Grid Background */ }
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[#0a192f]/90" />
                <svg
                    className="absolute inset-0 w-full h-full opacity-[0.03]"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
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
                </svg>
            </div>

            <div className="relative max-w-screen-xl p-4 mx-auto py-16">
                <div className="flex items-center gap-4 mb-16">
                    <p className="text-4xl font-bold text-gray-200">
                        Featured Projects
                    </p>
                    <div className="flex-grow h-[1px] bg-[#64ffda]/20"></div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    { projects.map( ( { id, title, description, tech, image, demo, code }, index ) => (
                        <motion.div
                            key={ id }
                            initial={ { opacity: 0, y: 20 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            transition={ { duration: 0.5, delay: index * 0.1 } }
                            className="group relative bg-[#112240] rounded-xl overflow-hidden"
                        >
                            {/* Project Image */ }
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={ image }
                                    alt={ title }
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-[#0a192f]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Project Content */ }
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-[#64ffda] transition-colors">
                                    { title }
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    { description }
                                </p>

                                {/* Tech Stack */ }
                                <div className="flex flex-wrap gap-2 mb-6">
                                    { tech.map( ( item ) => (
                                        <span
                                            key={ item }
                                            className="text-xs text-[#64ffda] bg-[#64ffda]/10 px-2 py-1 rounded-full"
                                        >
                                            { item }
                                        </span>
                                    ) ) }
                                </div>

                                {/* Project Links */ }
                                <div className="flex items-center gap-4">
                                    <a
                                        href={ demo }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/link flex items-center gap-2 text-gray-400 hover:text-[#64ffda] transition-colors"
                                    >
                                        <span>Live Demo</span>
                                        <svg
                                            className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                    <span className="text-gray-600">|</span>
                                    <a
                                        href={ code }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/link flex items-center gap-2 text-gray-400 hover:text-[#64ffda] transition-colors"
                                    >
                                        <span>Source Code</span>
                                        <svg
                                            className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Hover Border Effect */ }
                            <div className="absolute inset-0 border border-gray-800 group-hover:border-[#64ffda]/50 transition-colors duration-300 rounded-xl pointer-events-none" />
                        </motion.div>
                    ) ) }
                </div>
            </div>
        </div>
    );
};

export default Projects;