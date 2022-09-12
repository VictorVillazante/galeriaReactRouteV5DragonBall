import React from 'react'
import { useParams } from 'react-router-dom'

const CharacterScreen = () => {
    const {id}=useParams()
  return (
    <div className='container row'>
        {id}
    </div>
  )
}

export default CharacterScreen