const Contact = () =>
{
    return (
        <div className="w-full min-h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
                        Contact
                    </p>
                    <p className="py-6">Get in touch with me</p>
                </div>

                <div className="flex justify-center items-center">
                    <form
                        action="https://formspree.io/f/xdknvgqp"
                        method="POST"
                        className="flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md focus:outline-none focus:border-[#64ffda]"
                            autoComplete="off"
                            required
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none focus:border-[#64ffda]"
                            autoComplete="off"
                            required
                        />
                        <textarea
                            name="message"
                            rows="10"
                            placeholder="Enter your message"
                            className="p-2 bg-transparent border-2 rounded-md focus:outline-none focus:border-[#64ffda]"
                        ></textarea>

                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;