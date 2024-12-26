import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App ()
{
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/projects" element={ <ProjectsPage /> } />
          <Route path="/contact" element={ <ContactPage /> } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;