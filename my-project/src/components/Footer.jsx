import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () =>
{
    return (
        <footer className="relative bg-[#0a192f] text-gray-300 overflow-hidden">
            {/* Grid Background */ }
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent" />
                <svg
                    className="absolute bottom-0 opacity-[0.02]"
                    width="100%"
                    height="100"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="100" y2="0" stroke="#64ffda" strokeWidth="0.1" />
                        <line x1="0" y1="0" x2="0" y2="100" stroke="#64ffda" strokeWidth="0.1" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Content */ }
            <div className="relative max-w-screen-xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Section */ }
                    <div className="md:col-span-2">
                        <motion.h3
                            initial={ { opacity: 0, y: 20 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            transition={ { duration: 0.5 } }
                            className="text-2xl font-bold text-[#64ffda] mb-4"
                        >
                            Let's Connect
                        </motion.h3>
                        <motion.p
                            initial={ { opacity: 0, y: 20 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            transition={ { duration: 0.5, delay: 0.1 } }
                            className="text-gray-400 max-w-md mb-6"
                        >
                            Open for opportunities and interesting projects.
                            Let's work together to create something amazing.
                        </motion.p>
                        <motion.button
                            initial={ { opacity: 0, y: 20 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            whileHover={ { scale: 1.05 } }
                            whileTap={ { scale: 0.95 } }
                            transition={ { duration: 0.5, delay: 0.2 } }
                            className="group relative px-6 py-3 text-[#64ffda] hover:text-[#0a192f]"
                        >
                            <span className="relative z-10">Get In Touch </span>
                            <div className="absolute inset-0 border border-[#64ffda] rounded group-hover:bg-[#64ffda] transition-colors duration-300" />
                        </motion.button>
                    </div>

                    {/* Quick Links */ }
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            { [ 'Home', 'About', 'Projects', 'Contact' ].map( ( item, index ) => (
                                <motion.li
                                    key={ item }
                                    initial={ { opacity: 0, x: -20 } }
                                    whileInView={ { opacity: 1, x: 0 } }
                                    transition={ { duration: 0.5, delay: index * 0.1 } }
                                >
                                    <a
                                        href={ `/${ item.toLowerCase() }` }
                                        className="text-gray-400 hover:text-[#64ffda] transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-4 h-[1px] bg-[#64ffda] mr-0 group-hover:mr-2 transition-all duration-300" />
                                        { item }
                                    </a>
                                </motion.li>
                            ) ) }
                        </ul>
                    </div>

                    {/* Social Links */ }
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Social</h3>
                        <div className="flex flex-col space-y-4">
                            { [
                                { icon: FiGithub, label: 'GitHub', link: '#' },
                                { icon: FiLinkedin, label: 'LinkedIn', link: '#' },
                                { icon: FiTwitter, label: 'Twitter', link: '#' },
                                { icon: FiMail, label: 'Email', link: 'mailto:your@email.com' }
                            ].map( ( item, index ) => (
                                <motion.a
                                    key={ item.label }
                                    href={ item.link }
                                    target="_blank"
                                    rel="noreferrer"
                                    initial={ { opacity: 0, x: -20 } }
                                    whileInView={ { opacity: 1, x: 0 } }
                                    transition={ { duration: 0.5, delay: index * 0.1 } }
                                    className="flex items-center group text-gray-400 hover:text-[#64ffda] transition-colors duration-300"
                                >
                                    <item.icon className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                                    { item.label }
                                </motion.a>
                            ) ) }
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */ }
                <motion.div
                    initial={ { opacity: 0, y: 20 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    transition={ { duration: 0.5 } }
                    className="text-center pt-12 mt-16 border-t border-gray-800"
                >
                    <p className="text-gray-400">
                        Designed & Built by{ ' ' }
                        <span className="text-[#64ffda]">Niraj Tharu</span>
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        © { new Date().getFullYear() } All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;