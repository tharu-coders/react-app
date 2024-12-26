// const About = () =>
// {
//     return (
//         <div className="w-full min-h-screen p-4">
//             <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
//                 <div className="pb-8">
//                     <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
//                         About
//                     </p>
//                 </div>
//                 <p className="text-xl mt-20">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
//                     officia incidunt eveniet ipsum laudantium! Temporibus amet soluta modi
//                     cum, debitis possimus tempora dolor magni assumenda molestias quidem
//                     laboriosam id necessitatibus!
//                 </p>
//                 <br />
//                 <p className="text-xl">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
//                     officia incidunt eveniet ipsum laudantium! Temporibus amet soluta modi
//                     cum, debitis possimus tempora dolor magni assumenda molestias quidem
//                     laboriosam id necessitatibus!
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default About;

import propic from "../assets/profilepic.jpg";

const About = () =>
{
    return (
        <div className="relative w-full min-h-screen bg-[#0a192f] py-16">
            {/* Grid Background */ }
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[#0a192f]/90" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.02]" width="100%" height="100%">
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="100" y2="0" stroke="#64ffda" strokeWidth="0.1" />
                        <line x1="0" y1="0" x2="0" y2="100" stroke="#64ffda" strokeWidth="0.1" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative max-w-screen-lg mx-auto px-4">
                {/* Header Section */ }
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-4xl font-bold text-gray-200">
                        About Me
                    </h2>
                    <div className="flex-grow h-[1px] bg-[#64ffda]/20"></div>

                </div>

                {/* Content Grid */ }
                <div className="grid md:grid-cols-5 gap-8 items-center">
                    {/* Text Content */ }
                    <div className="md:col-span-3 space-y-6">
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Hello! I'm Niraj Tharu, a passionate full-stack developer.
                            I enjoy creating things that live on the internet, whether that be websites,
                            applications, or anything in between.
                        </p>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            My journey in web development started back in 2023 when I decided to try
                            editing custom Tumblr themes — turns out hacking together a custom reblog
                            button taught me a lot about HTML & CSS!
                        </p>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Fast-forward to today, and I've had the privilege of working at:
                        </p>

                        {/* Experience List */ }
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center gap-2">
                                <span className="text-[#64ffda]">▹</span>
                                <span>A start-up</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#64ffda]">▹</span>
                                <span>A large corporation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#64ffda]">▹</span>
                                <span>Freelance projects</span>
                            </li>
                        </ul>
                    </div>

                    {/* Image Section */ }
                    <div className="md:col-span-2">
                        <div className="relative group">
                            <div className="relative z-10 bg-[#64ffda] rounded">
                                <img
                                    src={ propic }
                                    alt="Profile"
                                    className="mix-blend-multiply grayscale contrast-100 hover:filter-none
                                transition-all duration-300 rounded"
                                />
                            </div>
                            {/* Border Frame */ }
                            <div className="absolute -inset-2.5 border-2 border-[#64ffda] rounded 
                                          transform translate-x-4 translate-y-4 group-hover:translate-x-2 
                                          group-hover:translate-y-2 transition-transform duration-300" />
                        </div>
                    </div>
                </div>

                {/* Technologies Section */ }
                <div className="mt-16">
                    <h3 className="text-gray-200 text-xl mb-4">
                        Here are a few technologies I've been working with recently:
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        { [ 'JavaScript (ES6+)', 'React', 'Node.js', 'Tailwind CSS', 'TypeScript', 'AWS' ].map( ( tech ) => (
                            <div key={ tech } className="flex items-center gap-2">
                                <span className="text-[#64ffda]">▹</span>
                                <span className="text-gray-400">{ tech }</span>
                            </div>
                        ) ) }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;