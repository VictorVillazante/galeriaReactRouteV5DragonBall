import React from 'react'
import Card from '../components/Card'
import { Characters } from '../models/Characters'
const MenScreen = () => {
  const characters=Characters.filter((character)=>character.type=="h")
  return (
    <div className='container mt-2'>
      <h1>Men characters</h1>

      <div className='row'>
        {characters.map((man)=>(
          <Card key={man.id} {...man}/>
        ))}
      </div>  
    </div>
  )
}

export default MenScreen