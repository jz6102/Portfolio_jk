



import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-bg-gradient">
      <Navbar />
      <main style={{ marginTop: 80 }}>
        <Home />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
