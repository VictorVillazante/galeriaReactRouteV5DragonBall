import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Characters } from '../models/Characters';
import "../assets/styles/CharacterScreen.css"
import Modal from "react-modal";
const CharacterScreen = ({ history }) => {
  const { id } = useParams();
  const handleBack = () => {
    history.goBack();
  }
  const [verVideo, setVerVideo] = useState(false);
  const handlePlayVideo = () => {
    console.log("vervideo");
    setVerVideo(true);
  }
  const hideLoader = () => {
    const loaderOverlay = document.querySelector(".loader-overlay");
    loaderOverlay.style.display = "none";
  };

  const { type, name, description, historyLarge,url } = Characters.find((c) => c.id === id)
  const dir = `/assets/${type}-${id}.png`;
  return (
    <div className='container row' id="principal-character">
      <div className='col-6'>
        <img src={dir} alt="" className='img-thumbnail' id="img-personaje" />
      </div>
      <div className='col-6'>
        <h1>{name}</h1>
        <div id="historia">
          <div id="historia-letras">
            <p>{historyLarge}</p>
          </div>
          <div id="historia-video">
            <h3>Reproducir video</h3>
            <div onClick={handlePlayVideo}>
              <img src="/assets/play-video.gif" alt="GIF animado" autoPlay />
            </div>
          </div>
        </div>
        <button onClick={handleBack} className='btn btn-primary' style={{ width: 100 }} >go back</button>
      </div>
      <div style={{ zIndex: 2}}>
        <Modal
          isOpen={verVideo}
          contentLabel="Video demostracion"
          onRequestClose={() => setVerVideo(false)}
          style={{
            content: {
              width: "50vw",
              height: "80vh",
              margin: "auto",
              background: "#d06e25",
              left: "0px",
            },
          }}
        >
          <iframe
            width="100%"
            height="90%"
            src={url}
            title="Video"
            allowFullScreen
            id="video"
            onLoad={() => hideLoader()}
          />
          <div className="loader-overlay">
            <div className="loader"></div>
          </div>
          <button
            className="btn btn-danger"
            onClick={() => setVerVideo(false)}
          >
            Cerrar video
          </button>
        </Modal>
      </div>
    </div>
  )
}

export default CharacterScreen