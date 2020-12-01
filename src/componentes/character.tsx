import React, { useState } from "react";
import "./styles.css";
import { Modal } from "antd";
import "antd/dist/antd.css";
/* import CharModal from './modals/charModal' */
const Character = ({ character }) => {
  const [modal, setModal] = useState(false);
  const HideModal = () => {
    setModal(false);
  };
  const ShowModal = () => {
    setModal(true);
  };
  return (
    <div key={character.id} className="character">
      <div onClick={ShowModal} >
        <img alt={character.name} src={character.image} />
        <h1>{character.name}</h1>
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
          <img alt={character.name} src={character.image} />
          <br />
          <strong>{character.name}</strong>
          <br />
          <strong>Type: </strong>
          {character.type}
          <br />
          <strong>Gender: </strong>
          {character.gender}
          <br />
          <strong>Species: </strong>
          {character.species}
        </Modal>
      </div>
    </div>
  );
};
export default Character;
