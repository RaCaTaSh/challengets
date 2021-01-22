import React, { FC } from "react";
import "./styles.css";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { charInterface, locInterface, epiInterface } from "./types";
interface Props {
  isOpen: boolean;
  data: charInterface | locInterface | epiInterface | any;
  handlerOpenModal: () => void;
  type: string;
}
interface Character {
  name: string;
  image: string;
}
const AllModal: FC<Props> = ({ isOpen, data, handlerOpenModal, type }) => {
  const chars = [];

  if (data.residents !== undefined) {
    for (let i = 0; i < 5; i++) {
      chars.push(data.residents[i]);
      if (i === data.residents.length - 1) {
        break;
      }
    }
  }
  if (data.characters !== undefined) {
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
      {type.startsWith("character") ? (
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

      {type.startsWith("location") ? (
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

      {type.startsWith("episode") ? (
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

      {!type.startsWith("character") ? (
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
