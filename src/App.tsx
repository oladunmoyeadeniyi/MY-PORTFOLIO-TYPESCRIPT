import { About } from "./components/About";
import { NavBar } from "./components/NavBar";
import { Profile } from "./components/Profile";
import { Resume } from "./components/Resume";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import { Portfolio } from "./components/Portfolio";
function App() {
  return (
    <div className="all">
      <NavBar />
      <section>
        <div className="container main-container">
          <Profile />
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </section>
    </div>
  );
}

export default App;
