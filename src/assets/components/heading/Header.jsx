import React from 'react'
import Head from "./Head";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";



function Header() {

  const [click, setClick] = useState(false);


  return (
    <div>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cursos">Cursos</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre Nós</Link>
            </li>
            <li>
              <Link to="/professores">Professores</Link>
            </li>
            <li>
              <Link to="/preço">Preço</Link>
            </li>
            <li>
              <Link to="/noticias">Noticias</Link>
            </li>
            <li>
              <Link to="/conosco">Fale Conosco</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">Emitir Certificado</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Header