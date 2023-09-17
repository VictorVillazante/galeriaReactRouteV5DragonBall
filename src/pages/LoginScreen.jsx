import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { authTypes } from '../types/authTypes';
import { useHistory } from 'react-router-dom';
import "../assets/styles/Login.css";

const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogin = () => {

    dispatch({ type: authTypes.login });
    history.push('/men');
  };
  return (
    <div className='container mt-5 text-center' id='img-fondo'>
      <nav>
        <li>
          <ul>
            <img id='logo' src="/assets/Dragon-Ball-Logo.png" alt="alt" />
          </ul>
          <ul>
            <button className='btn btn-primary' onClick={handleLogin}>Login</button>
          </ul>
        </li>
      </nav>
      <div id='img-fondo-difuminado'>
        <h1 id='titulo-principal' className='my-3'>Dragon Ball <p style={{color:"#e2721e"}}>fans</p></h1>
        <img id="img-principal" src="/assets/animate.gif" alt="alt" />
        <h1 style={{ display: "none" }} className='my-3'>Login Screen</h1>
        <p id='descripcion-principal'>"Dragon Ball Fans" is a website dedicated to the passionate community of followers of the famous "Dragon Ball" franchise created by Akira Toriyama, stay updated on the latest news, multimedia content, and events related to this iconic anime and manga series.</p>
        <img id="img-esferas" src="/assets/esferas-dragon.png" alt="alt" />

      </div>
    </div>
  )
}

export default LoginScreen;