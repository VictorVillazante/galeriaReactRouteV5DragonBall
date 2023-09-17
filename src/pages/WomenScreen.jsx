import React from 'react'
import { Characters } from '../models/Characters'
import Card from '../components/Card'

const WomenScreen = () => {
  //  const women=Characters.find((w)=>w.type=="m");
  const women = Characters.filter((w) => w.type === "m");
  console.log(women);
  return (
    <div className="container mt-2">
      <h1>Women characters</h1>

      <div className='row'>
        {women.map((w) => (
          <Card key={w.id}{...w} />
        ))}
      </div>
    </div>

  )
}

export default WomenScreen