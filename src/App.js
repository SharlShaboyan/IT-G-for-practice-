import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import About from './pages/about/About';
import Courses from './pages/courses/Courses';
import Footer from './pages/footer/Footer';

function App() {

  const down = useRef(null);
  const about = useRef(null);
  const courses = useRef(null);

  const gotoDown = () => {
    window.scrollTo({
        top : down.current.offsetTop,
        behavior : "smooth"
    })
  }

  const goToAbout = () => {
    window.scrollTo({
        top : about.current.offsetTop,
        behavior : "smooth"
    })
  }

  const goToCourses = () => {
    window.scrollTo({
        top : courses.current.offsetTop,
        behavior : "smooth"
    })
  }

  return (
    <div className="App">
      <Home gotoDown={gotoDown} goToAbout={goToAbout} goToCourses={goToCourses} />
      <Services down={down} />
      <About about={about} />
      <Courses courses={courses}  />
      <Footer />
    </div>
  );
}

export default App;
