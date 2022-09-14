import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import queryString  from "query-string";
import { Characters } from '../models/Characters'
import { useEffect } from 'react';
import Card from '../components/Card';

const SearchScreen = ({history}) => {
  const location=useLocation();

  const {q=""}=queryString.parse(location.search);

  const [inputValue, setInputValue] = useState(q);

  const [characters, setCharacters] = useState([])

  const handleChange=(e)=>{
    const value=e.target.value;
    setInputValue(value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    history.push(`?q=${inputValue}`);
    // window.location.reload();
  }

  
  

  const getCharacters=()=>{
    if(inputValue.trim()!=""){
      const value=inputValue.toLocaleLowerCase();
      const newvalue=Characters.filter(
        (c)=>c.name.toLocaleLowerCase().includes(value)
      );
      setCharacters(newvalue);
      console.log(characters);
    }else{
      setCharacters([]);
    }
  }
  // const buscar=()=>{
  //   if(inputValue.trim()!=""){
  //     const v=inputValue.toLocaleLowerCase();      
  //   }
  // }
  useEffect(() => {
    getCharacters();
  }, [q])
  
  return (
    <div className='col-12 container'>
      Buscar por nombre
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input value={inputValue} type="text" className="form-control" onChange={handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Primary</button>
      </form>
      <h2>Resultados:{characters.length}</h2>
      {characters.length==0 &&(
        <div className='alert alert-warning text-center'>
          No se encuentra elemento
        </div>
      )}
      {
        characters.map(c=><Card key={c.id} {...c}/>)
      }
    </div>
  )
}

export default SearchScreen