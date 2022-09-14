import React from 'react'
import { Characters } from '../models/Characters'
import Card from '../components/Card'

const WomenScreen = () => {
//  const women=Characters.find((w)=>w.type=="m");
  const women=Characters.filter((w)=>w.type==="m");
  console.log(women);
  return (
    <div className='row'>
        <h1>Personajes mujeres</h1>
        {women.map((w)=>(
          <Card key={w.id}{...w}/>
        ))}
    </div>
  )
}
  
export default WomenScreen