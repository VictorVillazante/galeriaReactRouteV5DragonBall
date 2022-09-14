import React from 'react'
import { useParams } from 'react-router-dom'
import { Characters } from '../models/Characters';

const CharacterScreen = ({history}) => {
    const {id}=useParams();
    const handleBack=()=>{
      history.goBack();
    }
    const {type,name,description}=Characters.find((c)=>c.id===id)
    const dir=`/assets/${type}-${id}.png`;
  return (
    <div className='container row'>
      <div className='col-6'>
          <img src={dir} alt="" className='img-thumbnail' />
      </div>
      <div className='col-6'>
          <h1>{name}</h1>
          <p>{description}</p>
          <button onClick={handleBack} className='btn btn-outline-info'style={{width:100}} >go back</button>
      </div>
    </div>
  )
}

export default CharacterScreen