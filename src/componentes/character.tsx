import React, { useState,FC } from "react";
import "./styles.css";
import { Modal } from "antd";
import "antd/dist/antd.css";
interface CharacterProp{
  character:{
  id:number,
  name:string,
  type:string,
  gender:string,
  species:string,
  image:string
  }
}
const Character:FC<CharacterProp> = ({ character }) => {
  const [modal, setModal] = useState(false);
  const HideModal = () => {
    setModal(false);
  };
  const ShowModal = () => {
    setModal(true);
  };
  return (
    <div key={character.id} className="character">
      <div onClick={ShowModal}>
        <img alt={character.name} src={character.image} />
        <h1>{character.name}</h1>
      </div>
      <div>
        <Modal
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
