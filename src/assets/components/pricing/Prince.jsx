import React from 'react'
import Back from '../common/back/Back'
import PrinceCard from './PrinceCard';
import "./prince.css"
import Faq from './Faq';

function Prince() {
  return (
    <>
      <Back title="Planos" />
      
      <section className="price padding">
        <div className="container grid">
            <PrinceCard/>
        </div>
      </section>
      <Faq />
    </>
  );
}

export default Prince