import React from "react";
import "./footer.css";
import {blog} from "../../../dummydata"

function Footer() {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Fique ligado e receba as últimas atualizações</h1>
            <span>Bem distante, atrás das montanhas de palavras</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Digite seu e-mail" />
            <i className="fas fa-paper-plane"></i>
          </div>
        </div>
      </section>

      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1 id="tr">Academia</h1>
            <span>Educação Online</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-linkedin icon"></i>
          </div>
          <div className="box link">
            <h3>Explorar</h3>
            <ul>
                {<li>about us</li>}
                {<li>about us</li>}
                {<li>about us</li>}
                {<li>about us</li>}
            </ul>
          </div>
          <div className="box link">
            <h3>Links Rápidos</h3>
            <ul>
                {<li>about us</li>}
                {<li>about us</li>}
                {<li>about us</li>}
                {<li>about us</li>}
            </ul>
          </div>
          <div className="bxo">
            <h3>Postagens Recentes</h3>
            {blog.slice(0.3).map((val) => {
                return (
                  <div className="items flexSB">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                    <span>
                  <i className="fa fa-user"></i>
                  <label htmlFor="">{val.type}</label>
                </span>
                <span>
                  <i className="fa fa-calendar-alt"></i>
                  <label htmlFor="">{val.date}</label>
                </span>
                <h4>{val.title}</h4>
                    </div>
                  </div>
                );
            })}
          </div>
          <div className="box last">
                <h3>Tem alguma dúvida?</h3>
                <ul>
                    <li>
                        <i className="fa fa-map"></i>
                        Juiz de fora
                    </li>
                    <li>
                        <i className="fa fa-phone"></i>
                        +123 456 789
                    </li>
                    <li>
                        <i className="fa-solid fa-paper-plane"></i>
                        luantrabalho49@gmail.com
                    </li>
                </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
          <p>Copyright @2025 All right reserved | @luantrabalho49@gmail.com </p>
      </div>
    </>
  );
}

export default Footer;
