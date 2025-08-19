import React from 'react'
import Title from '../../common/title/Title';
import { coursesCard } from '../../../dummydata';
import OnlineCurse from '../../allcours/OnlineCurse';

function HAbout() {
  return (
    <div>
        <section className='homeAbout'>
            <div className='container'>
                         <div className="coursesCard">
                            <Title subtitle='Nossos cursos' title="Conheça os cursos online mais procurados"/>
                           <div className="grid2">
                             {coursesCard.slice(0, 2).map((val) => {
                               return (
                                 <div className="items">
                                   <div className="content flex">
                                     <div className="left">
                                       <div className="img">
                                         <img src={val.cover} alt="" />
                                       </div>
                                     </div>
                                     <div className="text">
                                       <h1>{val.coursesName}</h1>
                                       <div className="rate">
                                         <i className="fas fa-star"></i>
                                         <i className="fas fa-star"></i>
                                         <i className="fas fa-star"></i>
                                         <i className="fas fa-star"></i>
                                         <i className="fas fa-star"></i>
                                         <label htmlFor="">(5.0)</label>
                                       </div>
                                       <div className="details">
                                         {/* This beacouse we are fetch the nested api */}
                                         {val.courTeacher.map((details) => (
                                           <>
                                             <div className="box">
                                               <div className="dimg">
                                                 <img src={details.dcover} alt="" />
                                               </div>
                                               <div className="para">
                                                 <h4>{details.nome}</h4>
                                               </div>
                                             </div>
                                             <span>{details.totalTime}</span>
                                           </>
                                         ))}
                                       </div>
                                     </div>
                                   </div>
                                   <div className="price">
                                     <h3>
                                       {val.priceAll} / {val.pricePer}
                                     </h3>
                                   </div>
                                   <button className="outline-btn">Inscreva-se agora
                                   </button>
                                 </div>
                               );
                             })}
                           </div>
                         </div>  
            </div>
        </section>
        <OnlineCurse/>
    </div>
  )
}

export default HAbout