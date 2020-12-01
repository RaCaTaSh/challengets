import "./styles.css";
import React from 'react'
import { Modal } from "antd";
import { useState } from "react";
const Location = ({ location }) => {
  const [modal, setModal] = useState(false);
  const HideModal = () => {
    setModal(false);
  };
  const ShowModal = () => {
    setModal(true);
  };
  var residents = [];
  if (location.residents.length > 5) {
    for (let i = 0; i < 5; i++) {
      residents.push(location.residents[i]);
    }
  }else{
    for (let i = 0; i < location.residents.length; i++) {
      residents.push(location.residents[i]);
    }
  }
  return (
    <div key={location.id}  >
      <div className="location" onClick={ShowModal} >
        <p>{location.name}</p>
        <br />
        <p>{location.dimension}</p>
      </div>
      <div >
        <Modal
          tittle="Modal Header"
          visible={modal}
          onOk={HideModal}
          onCancel={HideModal}
          footer={null}
          bodyStyle={{ font: "Arial", fontSize: "medium", textAlign: "center" }}
        >
          <strong>{location.name}</strong>
          <br />
          <strong>Type: </strong>
          {location.type}
          <br />
          <strong>Dimension: </strong>
          {location.dimension}
          <br />
          <strong>Species: </strong><br/>
            {residents.map((res)=>{
            return (<div className="sub-container" key={location.id}><p>{res.name}</p><img alt={res.name} src={res.image} /></div>)
          })} 
        </Modal>
      </div>
    </div>
  );
};

export default Location;
