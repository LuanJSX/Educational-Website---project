import React from 'react'
import Back from "../common/back/Back";
import "./contact.css";

function Contact() {

    const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14822.201089849257!2d-43.35716817175043!3d-21.758954153656802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989ca1bcf58a1d%3A0x61a407556188a86c!2sCentro%2C%20Juiz%20de%20Fora%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1755637175317!5m2!1spt-BR!2sbr"
  return (
    <>
      <Back title="contact" />
      <section className="contact padding">
        <div className="container shadow flexSB">
            <div className='left row'>
            <iframe src={map}></iframe>
        </div>
        <div className="right row">
          <h1>Contato</h1>
          <p></p>

          <div className="items grid2">
            <div className="box">
              <h4>Endereço</h4>
              <p>Centro, Juiz de Fora - MG</p>
            </div>
            <div className="box">
              <h4>Email:</h4>
              <p>luantrabalho49@gmail.com</p>
            </div>
            <div className="box">
              <h4>Telefone:</h4>
              <p>(32) 90000</p>
            </div>
          </div>
          <form action="">
            <div className="flexSB">
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="Email" />
            </div>
            <input type="Email" placeholder="Subject" />
            <textarea name="" id="" cols="30" rows="10">
              Digite aqui sua mensagem
            </textarea>
            <button className="primary-btn">Enviar</button>
          </form>
          <span></span>
        </div>
        </div>
      </section>
    </>
  );
}

export default Contact