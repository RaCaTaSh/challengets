import React, { useState, FC } from "react";
import "./styles.css";
import { Modal } from "antd";
import "antd/dist/antd.css";
import Card from './all'
import useModal from './../hooks/useModal'
interface Props {
  character: {
    id: number;
    name: string;
    type: string;
    gender: string;
    species: string;
    image: string;
  };
}
const Character: FC<Props> = ({ character }) => {
  const {isOpen,handlerOpenModal}=useModal()
  return (
    <div key={character.id} className="character">
      <div onClick={handlerOpenModal} className="character2">
        <img alt={character.name} src={character.image} />
        <h1>{character.name}</h1>
      </div>
      <div>
        <Modal
          visible={isOpen}
          onOk={handlerOpenModal}
          onCancel={handlerOpenModal}
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
