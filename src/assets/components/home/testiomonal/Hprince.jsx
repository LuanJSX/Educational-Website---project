import React from "react";
import Title from "../../common/title/Title";
import PrinceCard from "../../pricing/PrinceCard";

function Hprince() {
  return (
    <>
      <section className="hprice padding">
        <Title subtitle="nossos preços" title="planos e preços" />
        <div className="price container grid">
            <PrinceCard/>
        </div>
      </section>
    </>
  );
}

export default Hprince;
