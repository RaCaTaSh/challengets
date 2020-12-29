import React, { useState, FC } from "react";
import "./styles.css";
import { Modal } from "antd";

interface Props {
  episode: {
    id: string;
    name: string;
    air_date: string;
    episode: string;
    characters: [
      {
        name: string;
        image: string;
      }
    ];
  };
}
interface Character {
  name: string;
  image: string;
}
const Episode: FC<Props> = ({ episode }) => {
  const [modal, setModal] = useState<boolean>(false);
  const HideModal = (): void => {
    setModal(false);
  };
  const ShowModal = (): void => {
    setModal(true);
  };
  const chars = [];

  for (let i = 0; i < 5; i++) {
    chars.push(episode.characters[i]);
    if (i === episode.characters.length - 1) {
      break;
    }
  }

  return (
    <div key={episode.id}>
      <div className="episode" onClick={ShowModal}>
        <p>{episode.name}</p>
        <br />
        <p>{episode.episode}</p>
      </div>
      <div>
        <Modal
          key={episode.id}
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
          {chars.map((char: Character) => {
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
  );
};

export default Episode;
