import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const Hero = () =>
{
    const [ mousePosition, setMousePosition ] = useState( { x: 0, y: 0 } );

    useEffect( () =>
    {
        const handleMouseMove = ( e ) =>
        {
            const { clientX, clientY } = e;
            const moveX = clientX - window.innerWidth / 2;
            const moveY = clientY - window.innerHeight / 2;
            setMousePosition( { x: moveX, y: moveY } );
        };

        window.addEventListener( 'mousemove', handleMouseMove );
        return () => window.removeEventListener( 'mousemove', handleMouseMove );
    }, [] );

    return (
        <div className="relative min-h-screen bg-[#0a192f] overflow-hidden">
            {/* Dynamic Background Circles */ }
            <motion.div
                animate={ {
                    x: mousePosition.x * 0.05,
                    y: mousePosition.y * 0.05,
                } }
                className="absolute inset-0 flex items-center justify-center"
            >
                <div className="relative w-[800px] h-[800px]">
                    <div className="absolute inset-0 rounded-full bg-[#64ffda]/5 blur-3xl" />
                    <div className="absolute inset-10 rounded-full bg-[#64ffda]/5 blur-2xl" />
                    <div className="absolute inset-20 rounded-full bg-[#64ffda]/5 blur-xl" />
                </div>
            </motion.div>

            {/* Main Content */ }
            <div className="relative z-10 min-h-screen flex flex-col justify-center">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    {/* Top Bar */ }
                    <motion.div
                        initial={ { opacity: 0, y: -20 } }
                        animate={ { opacity: 1, y: 0 } }
                        transition={ { duration: 0.6 } }
                        className="flex justify-between items-center mb-20"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-[#64ffda] rounded-full animate-pulse" />
                            <span className="text-[#64ffda] font-mono">Available for work</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-6 text-gray-400">
                            <span>Based in Nepal</span>
                            <span>GMT +5:30</span>
                        </div>
                    </motion.div>

                    {/* Main Title Section */ }
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={ { opacity: 0, x: -50 } }
                            animate={ { opacity: 1, x: 0 } }
                            transition={ { duration: 0.8 } }
                        >
                            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
                                Creative
                                <br />
                                <span className="text-[#64ffda]">Developer</span>
                            </h1>
                            <p className="text-gray-400 text-lg mb-12 max-w-lg">
                                Crafting digital experiences through clean code and creative solutions.
                                Specialized in building modern web applications.
                            </p>
                            <motion.button
                                whileHover={ { scale: 1.05 } }
                                whileTap={ { scale: 0.95 } }
                                className="group relative inline-flex items-center"
                            >
                                <span className="relative z-10 flex items-center text-lg font-medium text-[#64ffda] group-hover:text-[#0a192f] transition-colors duration-300 px-8 py-4">
                                    Explore Projects
                                    <FiArrowUpRight className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-[#64ffda] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            </motion.button>
                        </motion.div>

                        {/* 3D Cards Grid */ }
                        <motion.div
                            initial={ { opacity: 0, y: 50 } }
                            animate={ { opacity: 1, y: 0 } }
                            transition={ { duration: 0.8 } }
                            style={ {
                                perspective: '1000px',
                                transform: 'rotateX(5deg)',
                            } }
                            className="hidden md:grid grid-cols-2 gap-4"
                        >
                            { [ 1, 2, 3, 4 ].map( ( item ) => (
                                <motion.div
                                    key={ item }
                                    animate={ {
                                        rotateX: mousePosition.y * 0.01,
                                        rotateY: mousePosition.x * 0.01,
                                    } }
                                    className="relative h-48 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-6 border border-gray-700 hover:border-[#64ffda] transition-colors duration-300"
                                >
                                    <div className="absolute top-0 left-0 w-full h-full bg-[#64ffda]/5 rounded-lg backdrop-blur-sm" />
                                    <div className="relative z-10">
                                        <div className="text-4xl font-bold text-[#64ffda] mb-2">
                                            { item === 1 ? '2+' : item === 2 ? '10+' : item === 3 ? '100%' : '∞' }
                                        </div>
                                        <div className="text-gray-400">
                                            { item === 1 ? 'Years Experience' :
                                                item === 2 ? 'Projects Done' :
                                                    item === 3 ? 'Client Satisfaction' :
                                                        'Lines of Code' }
                                        </div>
                                    </div>
                                </motion.div>
                            ) ) }
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;