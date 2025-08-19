import React from 'react'
import Back from "../common/back/Back"
import TeamCard from '../team/TeamCard';
import "./team.css";

function Team() {
  return (
    <div>
      <Back title="Professores" />
      <section className='team padding'>
         <div className='container grid'>
            <TeamCard/>
         </div>
      </section>
    </div>
  );
}

export default Team