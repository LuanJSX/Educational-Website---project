import React from 'react'
import { price } from '../../dummydata'

function PrinceCard() {
  return (
    <>
   
      {price.map((val) => (
        <div className="items shadow">
          <h4>{val.name}</h4>
          <h1>
            <span> $ </span>
            {val.price}
          </h1>
          <p className='text-prince'>{val.desc} </p>
          <button className='outline-btn'>Vamos Começar?</button>
        </div>
      ))}
    </>
  );
}

export default PrinceCard