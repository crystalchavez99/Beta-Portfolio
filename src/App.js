import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Project from "./components/Projects/Project";
import './App.css';
function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Project/>
      <Contact/>

    </div>
  );
}

export default App;
