import React from "react";
import "./style.css";
import Title from "../../common/title/Title";
import { testimonal } from "../../../dummydata";

function Test() {
  return (
    <div>
      <section className="testimonial padding">
        <div className="container">
          <Title subtitle="Testemunhos" title="nossas histórias de sucesso" />
          <div className="content grid2">
            {testimonal.map((val) => (
              <div className="items shadow">
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <i className=" fa fa-quote-left icon"></i>
                  </div>
                  <div className="name">
                    <h2>{val.name}</h2>
                    <h2>{val.post}</h2>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Test;
