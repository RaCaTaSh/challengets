import React, { useState, FC } from "react";
import "./styles.css";
import { Modal } from "antd";
import "antd/dist/antd.css";
interface Props {
  isOpen: boolean;
  data: any;
  handlerOpenModal: () => void;
  type: string;
}
interface Character {
  name: string;
  image: string;
}
const AllModal: FC<Props> = ({ isOpen, data, handlerOpenModal, type }) => {
  const chars = [];
  if (type === "locations") {
    for (let i = 0; i < 5; i++) {
      chars.push(data.residents[i]);
      if (i === data.residents.length - 1) {
        break;
      }
    }
  }
  if (type === "episodes") {
    for (let i = 0; i < 5; i++) {
      chars.push(data.characters[i]);
      if (i === data.characters.length - 1) {
        break;
      }
    }
  }
  return (
    <Modal
      visible={isOpen}
      onOk={handlerOpenModal}
      onCancel={handlerOpenModal}
      footer={null}
      bodyStyle={{ font: "Arial", fontSize: "medium", textAlign: "center" }}
    >
      {type === "characters" ? (
        <div>
          <img alt={data.name} src={data.image} />
          <br />
          <strong>{data.name}</strong>
          <br />
          <strong>Type: </strong>
          {data.type}
          <br />
          <strong>Gender: </strong>
          {data.gender}
          <br />
          <strong>Species: </strong>
          {data.species}
        </div>
      ) : null}

      {type === "locations" ? (
        <div>
          <strong>{data.name}</strong>
          <br />
          <strong>Type: </strong>
          {data.type}
          <br />
          <strong>Dimension: </strong>
          {data.dimension}
          <br />
          <strong>Species: </strong>
          <br />
        </div>
      ) : null}

      {type === "episodes" ? (
        <div>
          <strong>{data.name}</strong>
          <br />
          <strong>Release date: </strong>
          {data.air_date}
          <br />
          <strong>Episode: </strong>
          {data.episode}
          <br />
          <strong>Characters: </strong>
          <br />
        </div>
      ) : null}

      {type !== "characters" ? (
        <div>
          {chars.map((char: Character) => {
            return (
              <div className="sub-container" key={data.id}>
                <p>{char.name}</p>
                <img alt={char.name} src={char.image} />
              </div>
            );
          })}
        </div>
      ) : null}
    </Modal>
  );
};
export default AllModal;
