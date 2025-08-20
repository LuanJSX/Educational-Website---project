import React from 'react'
import "./hero.css";
import Title from "../../common/title/Title";

function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title
              subtitle="Bem-vindo à Academia!"
              title="Estude com qualidade, aprenda com propósito."
            />
            <p className="hero-text">
              Cursos atualizados, professores dedicados e certificação
              garantida. Tudo o que você precisa para se destacar..
            </p>
            <div className="button">
              <button className="primary-btn">
                Começar Agora
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                Ver Cursos
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="marigin"></div>
    </div>
  );
}

export default Hero