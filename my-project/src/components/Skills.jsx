import { motion } from 'framer-motion';
import
{
    SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiTailwindcss,
    SiTypescript, SiNextdotjs, SiGit, SiMongodb, SiFirebase, SiPython
} from 'react-icons/si';

const Skills = () =>
{
    const skills = [
        { id: 1, name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { id: 2, name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { id: 3, name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { id: 4, name: "React", icon: SiReact, color: "#61DAFB" },
        { id: 5, name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { id: 6, name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { id: 7, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { id: 8, name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { id: 9, name: "Git", icon: SiGit, color: "#F05032" },
        { id: 10, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { id: 11, name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { id: 12, name: "Python", icon: SiPython, color: "#3776AB" }
    ];

    return (
        <div className="relative w-full min-h-screen bg-[#0a192f] py-20">
            {/* Grid Background */ }
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[#0a192f]/90" />
                <div className="absolute inset-0" style={ {
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='100' y2='0' stroke='%2364ffda' stroke-width='0.1'/%3E%3Cline x1='0' y1='20' x2='100' y2='20' stroke='%2364ffda' stroke-width='0.1'/%3E%3Cline x1='0' y1='40' x2='100' y2='40' stroke='%2364ffda' stroke-width='0.1'/%3E%3Cline x1='0' y1='60' x2='100' y2='60' stroke='%2364ffda' stroke-width='0.1'/%3E%3Cline x1='0' y1='80' x2='100' y2='80' stroke='%2364ffda' stroke-width='0.1'/%3E%3Cline x1='0' y1='100' x2='100' y2='100' stroke='%2364ffda' stroke-width='0.1'/%3E%3Cline x1='0' y1='0' x2='0' y2='100' stroke='%2364ffda' stroke-width='0.1'/%3E%3Cline x1='20' y1='0' x2='20' y2='100' stroke='%2364ffda' stroke-width='0.1'/%3E%3Cline x1='40' y1='0' x2='40' y2='100' stroke='%2364ffda' stroke-width='0.1'/%3E%3Cline x1='60' y1='0' x2='60' y2='100' stroke='%2364ffda' stroke-width='0.1'/%3E%3Cline x1='80' y1='0' x2='80' y2='100' stroke='%2364ffda' stroke-width='0.1'/%3E%3Cline x1='100' y1='0' x2='100' y2='100' stroke='%2364ffda' stroke-width='0.1'/%3E%3C/svg%3E")`,
                    opacity: 0.05
                } } />
            </div>

            {/* Content */ }
            <div className="relative max-w-screen-xl mx-auto px-6">
                <motion.div
                    initial={ { opacity: 0, y: 20 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    transition={ { duration: 0.5 } }
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
                        Technical Skills
                    </h2>
                    <div className="flex justify-center">
                        <p className="text-gray-400 max-w-2xl">
                            A showcase of my programming languages, frameworks, and tools that I use to bring ideas to life
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={ { opacity: 0 } }
                    whileInView={ { opacity: 1 } }
                    transition={ { duration: 0.5, delay: 0.2 } }
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    { skills.map( ( { id, name, icon: Icon, color }, index ) => (
                        <motion.div
                            key={ id }
                            initial={ { opacity: 0, y: 20 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            transition={ { duration: 0.5, delay: index * 0.1 } }
                            whileHover={ { y: -5 } }
                            className="relative group"
                        >
                            <div className="relative z-10 bg-[#112240] p-6 rounded-lg backdrop-blur-sm border border-gray-800 
                            hover:border-[#64ffda] transition-colors duration-300">
                                <div className="flex flex-col items-center space-y-4">
                                    <Icon className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                                        style={ { color } } />
                                    <p className="text-gray-300 font-medium">{ name }</p>
                                </div>
                                {/* Glow Effect */ }
                                <div className="absolute inset-0 -z-10 bg-[#64ffda]/5 blur-xl 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                            </div>
                        </motion.div>
                    ) ) }
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;