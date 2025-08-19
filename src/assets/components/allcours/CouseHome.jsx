import React from 'react'
import Back from '../common/back/Back';
import "./courses.css";
import CourseCard from './CourseCard';
import OnlineCurse from './OnlineCurse';

function CouseHome() {
  return (
    <div>
      <Back title="Cursos"/>
      <CourseCard/>
      <OnlineCurse/>  
    </div>
  )
}

export default CouseHome