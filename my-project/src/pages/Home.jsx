import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () =>
{
    return (
        <div>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
};

export default Home;