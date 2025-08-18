import React from "react";
import Header from "./assets/components/heading/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
 import Home from "./assets/components/home/Home.jsx";
 import About from "./assets/components/about/About.jsx";


function App() {
  return (
    <div>
      <Router>
      <Header />
       {<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
        </Routes> }
      </Router>
    </div>
  );
}

export default App;
