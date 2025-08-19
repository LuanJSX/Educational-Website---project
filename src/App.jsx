import React from "react";
import Header from "./assets/components/heading/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
 import Home from "./assets/components/home/Home.jsx";
 import About from "./assets/components/about/About.jsx";
 import CouseHome from "./assets/components/allcours/CouseHome.jsx";
 import Team from "./assets/components/team/Team.jsx";
import Prince from "./assets/components/pricing/Prince.jsx";
import Blog from "./assets/components/blog/Blog.jsx";

function App() {
  return (
    <div>
      <Router>
        <Header />
        {
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/cursos" element={<CouseHome />} />
            <Route path="/professores" element={<Team />} />
            <Route path="/planos" element={<Prince />} />
            <Route path="/noticias" element={<Blog />} />
          </Routes>
        }
      </Router>
    </div>
  );
}

export default App;
