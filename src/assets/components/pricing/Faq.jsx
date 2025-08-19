
import Title from "../common/title/Title";
import { faq } from "../../dummydata";
import { useState } from "react";

function Faq() {

  const [click, setClick] = useState(false);

  const toggle = (index) => {
    if(click === index) {
        return setClick(null);
    } 

    setClick(index);
  }

  return (
    <>
      <Title subtitle="Dúvidas Frequentes  " />
      <section className="faq">
        <div className="container">
          {faq.map((val, index) => (
            <div className="box">
              <button
                className="accordion"
                onClick={() => toggle(index)}
                key={index}
              >
                <h2>{val.title}</h2>
                <span>
                  {click === index ? (
                    <i className="fa fa-chevron-down"></i>
                  ) : (
                    <i className="fa fa-chevron-up"></i>
                  )}
                </span>
              </button>
              {click === index && (
                <div className="content">
                  <p>{val.desc}</p>
                </div>
              )}    
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Faq