import React from 'react'

function Head() {
  return (
    <div>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>Academia</h1>
            <span className='second'>Educação Online e Aprendizado</span>
          </div>

          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-linkedin icon"></i>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Head