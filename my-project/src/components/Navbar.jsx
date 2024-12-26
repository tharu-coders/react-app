// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FiCode, FiExternalLink } from 'react-icons/fi';

// const Navbar = () =>
// {
//     const [ scrolled, setScrolled ] = useState( false );

//     useEffect( () =>
//     {
//         const handleScroll = () =>
//         {
//             setScrolled( window.scrollY > 50 );
//         };
//         window.addEventListener( 'scroll', handleScroll );
//         return () => window.removeEventListener( 'scroll', handleScroll );
//     }, [] );

//     return (
//         <motion.nav
//             initial={ { y: -100 } }
//             animate={ { y: 0 } }
//             transition={ { duration: 0.5 } }
//             className={ `fixed w-full z-50 transition-all duration-500 ${ scrolled ? 'bg-[#0a192f]/95 backdrop-blur-sm border-b border-[#64ffda]/10' : 'bg-transparent'
//                 }` }
//         >
//             <div className="flex justify-between items-center w-full h-20 max-w-screen-xl mx-auto px-6">
//                 {/* Creative Logo/Brand */ }
//                 <Link to="/" className="flex items-center space-x-3 group">
//                     <div className="relative h-10 w-10 flex items-center justify-center">
//                         <div className="absolute inset-0 bg-[#64ffda]/10 rounded transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//                         <span className="text-2xl font-bold text-[#64ffda] relative z-10">&lt;/&gt;</span>
//                     </div>
//                     <div className="flex flex-col">
//                         <span className="text-xl font-bold text-gray-100">
//                             Code<span className="text-[#64ffda]">Craft</span>
//                         </span>
//                         <span className="text-xs text-gray-400">Portfolio Collection</span>
//                     </div>
//                 </Link>

//                 {/* Navigation Links */ }
//                 <div className="hidden md:flex items-center space-x-8">
//                     { [ 'Home', 'About', 'Projects', 'Contact' ].map( ( item ) => (
//                         <motion.div
//                             key={ item }
//                             initial={ { opacity: 0, y: -20 } }
//                             animate={ { opacity: 1, y: 0 } }
//                             transition={ { duration: 0.5 } }
//                         >
//                             <Link
//                                 to={ item === 'Home' ? '/' : `/${ item.toLowerCase() }` }
//                                 className="relative group px-3 py-2 text-sm font-medium text-gray-300 hover:text-[#64ffda] transition-colors duration-300"
//                             >
//                                 <span className="relative">
//                                     { item }
//                                     <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#64ffda] transition-all duration-300 group-hover:w-full" />
//                                 </span>
//                             </Link>
//                         </motion.div>
//                     ) ) }

//                     {/* Resume Button */ }
//                     <motion.div
//                         initial={ { opacity: 0, y: -20 } }
//                         animate={ { opacity: 1, y: 0 } }
//                         transition={ { duration: 0.5 } }
//                     >
//                         <a
//                             href="/resume.pdf"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="group relative inline-flex items-center px-4 py-2 text-sm font-medium"
//                         >
//                             <span className="relative z-10 flex items-center text-[#64ffda] group-hover:text-[#0a192f] transition-colors duration-300">
//                                 Resume
//                                 <FiExternalLink className="ml-2 -mr-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//                             </span>
//                             <div className="absolute inset-0 border border-[#64ffda] rounded group-hover:bg-[#64ffda] transition-colors duration-300" />
//                         </a>
//                     </motion.div>
//                 </div>
//             </div>
//         </motion.nav>
//     );
// };

// export default Navbar;


import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiExternalLink, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () =>
{
    const [ scrolled, setScrolled ] = useState( false );
    const [ isOpen, setIsOpen ] = useState( false );

    useEffect( () =>
    {
        const handleScroll = () =>
        {
            setScrolled( window.scrollY > 50 );
        };
        window.addEventListener( 'scroll', handleScroll );
        return () => window.removeEventListener( 'scroll', handleScroll );
    }, [] );

    // Prevent scrolling when mobile menu is open
    useEffect( () =>
    {
        if ( isOpen )
        {
            document.body.style.overflow = 'hidden';
        } else
        {
            document.body.style.overflow = 'unset';
        }
    }, [ isOpen ] );

    return (
        <motion.nav
            initial={ { y: -100 } }
            animate={ { y: 0 } }
            transition={ { duration: 0.5 } }
            className={ `fixed w-full z-50 transition-all duration-500 ${ scrolled ? 'bg-[#0a192f]/95 backdrop-blur-sm border-b border-[#64ffda]/10' : 'bg-transparent'
                }` }
        >
            <div className="flex justify-between items-center w-full h-20 max-w-screen-xl mx-auto px-6">
                {/* Logo */ }
                <Link to="/" className="flex items-center space-x-3 group">
                    <div className="relative h-10 w-10 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#64ffda]/10 rounded transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        <span className="text-2xl font-bold text-[#64ffda] relative z-10">&lt;/&gt;</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-gray-100">
                            Code<span className="text-[#64ffda]">Craft</span>
                        </span>
                        <span className="text-xs text-gray-400">Portfolio Collection</span>
                    </div>
                </Link>

                {/* Desktop Navigation */ }
                <div className="hidden md:flex items-center space-x-8">
                    { [ 'Home', 'About', 'Projects', 'Contact' ].map( ( item ) => (
                        <motion.div key={ item }>
                            <Link
                                to={ item === 'Home' ? '/' : `/${ item.toLowerCase() }` }
                                className="relative group px-3 py-2 text-sm font-medium text-gray-300 hover:text-[#64ffda] transition-colors duration-300"
                            >
                                <span className="relative">
                                    { item }
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#64ffda] transition-all duration-300 group-hover:w-full" />
                                </span>
                            </Link>
                        </motion.div>
                    ) ) }

                    {/* Resume Button */ }
                    <motion.div>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center px-4 py-2 text-sm font-medium"
                        >
                            <span className="relative z-10 flex items-center text-[#64ffda] group-hover:text-[#0a192f] transition-colors duration-300">
                                Resume
                                <FiExternalLink className="ml-2 -mr-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 border border-[#64ffda] rounded group-hover:bg-[#64ffda] transition-colors duration-300" />
                        </a>
                    </motion.div>
                </div>

                {/* Mobile Menu Button */ }
                <button
                    onClick={ () => setIsOpen( !isOpen ) }
                    className="md:hidden text-gray-300 hover:text-[#64ffda] transition-colors duration-300"
                >
                    { isOpen ? (
                        <FiX className="h-6 w-6" />
                    ) : (
                        <FiMenu className="h-6 w-6" />
                    ) }
                </button>
            </div>

            {/* Mobile Menu */ }
            <AnimatePresence>
                { isOpen && (
                    <motion.div
                        initial={ { opacity: 0, y: -20 } }
                        animate={ { opacity: 1, y: 0 } }
                        exit={ { opacity: 0, y: -20 } }
                        transition={ { duration: 0.3 } }
                        className="fixed inset-0 z-40 bg-[#0a192f]/98 backdrop-blur-sm md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-8">
                            { [ 'Home', 'About', 'Projects', 'Contact' ].map( ( item, index ) => (
                                <motion.div
                                    key={ item }
                                    initial={ { opacity: 0, y: 20 } }
                                    animate={ { opacity: 1, y: 0 } }
                                    transition={ { delay: index * 0.1 } }
                                >
                                    <Link
                                        to={ item === 'Home' ? '/' : `/${ item.toLowerCase() }` }
                                        onClick={ () => setIsOpen( false ) }
                                        className="text-2xl font-medium text-gray-300 hover:text-[#64ffda] transition-colors duration-300"
                                    >
                                        { item }
                                    </Link>
                                </motion.div>
                            ) ) }

                            {/* Mobile Resume Button */ }
                            <motion.div
                                initial={ { opacity: 0, y: 20 } }
                                animate={ { opacity: 1, y: 0 } }
                                transition={ { delay: 0.4 } }
                            >
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={ () => setIsOpen( false ) }
                                    className="inline-flex items-center px-6 py-3 text-[#64ffda] border border-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors duration-300"
                                >
                                    Resume <FiExternalLink className="ml-2" />
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                ) }
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;