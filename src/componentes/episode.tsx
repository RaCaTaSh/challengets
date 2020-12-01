import "./styles.css";
import { Modal } from "antd";
import { useState } from "react";
import React from 'react'

const Episode =({episode})=>{
  const [modal, setModal] = useState(false);
  const HideModal = () => {
    setModal(false);
  };
  const ShowModal = () => {
    setModal(true);
  };
  var chars = [];
  if (episode.characters.length > 5) {
    for (let i = 0; i < 5; i++) {
      chars.push(episode.characters[i]);
    }
  }else{
    for (let i = 0; i < episode.characters.length; i++) {
      chars.push(episode.characters[i]);
    }
  }
  return(
    <div key={episode.id} >
      <div className="episode" onClick={ShowModal}>
      <p>{episode.name}</p><br/>
      <p>{episode.episode}</p>
      </div>
      <div>
      <Modal
       tittle="Modal Header"
       visible={modal}
       onOk={HideModal}
       onCancel={HideModal}
       footer={null}
       bodyStyle={{ font: "Arial", fontSize: "medium", textAlign: "center" }}
     >
       <strong>{episode.name}</strong>
       <br />
       <strong>Release date: </strong>
       {episode.air_date}
       <br />
       <strong>Episode: </strong>
       {episode.episode}
       <br />
       <strong>Characters: </strong>
       <br />
       {chars.map((char) => {
         return (
           <div className="sub-container">
             <p>{char.name}</p>
             <img alt={char.name} src={char.image} />
           </div>
         );
       })}
     </Modal> 
   </div>
    </div>
    
  )
}

export default Episode;