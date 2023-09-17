import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/styles/Card.css"

const Card = ({name,description,type,id}) => {
    const path=`/assets/${type}-${id}.png`;
  return (
    <div
        className='card m-3  card-estilos-personales'
        style={{
            width:400,
            heigth:400
        }}
        
    >   
        <div className='div-img-galeria'>
            <img src={path} alt={id} className="img-galeria"/>
        </div>
        <div className='card-body' style={{textAlign:"center"}}>
            <h3 className='card-title'>{name}</h3>
            <p className='card-text'>
                <p>{description}</p>
                <Link className='card-link' to={`/character/${id}`}>
                    <button className="btn btn-primary">Details</button>
                </Link>
            </p>
        </div>
    </div>
  )
}

export default Card