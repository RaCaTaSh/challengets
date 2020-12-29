import React, { useState, FC } from "react";
import "./styles.css";
import { Modal } from "antd";
import "antd/dist/antd.css";
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
  const [modal, setModal] = useState<boolean>(false);
  const HideModal = (): void => {
    setModal(false);
  };
  const ShowModal = (): void => {
    setModal(true);
  };
  return (
    <div key={character.id} className="character">
      <div onClick={ShowModal} className="character2">
        <img alt={character.name} src={character.image} />
        <h1>{character.name}</h1>
      </div>
      <div>
        <Modal
          visible={modal}
          onOk={HideModal}
          onCancel={HideModal}
          footer={null}
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
