import React, { FC, useState } from "react";
import "./styles.css";
import { Modal } from "antd";
import useModal from "../hooks/useModal";

interface Props {
  location: {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: [
      {
        name: string;
        image: string;
      }
    ];
  };
}
interface Location {
  name: string;
  image: string;
}
const Location: FC<Props> = ({ location }) => {
  const { isOpen, handlerOpenModal } = useModal();
  const residents = [];

  for (let i = 0; i < 5; i++) {
    residents.push(location.residents[i]);
    if (i === location.residents.length - 1) {
      break;
    }
  }

  return (
    <div key={location.id}>
      <div className="location" onClick={handlerOpenModal}>
        <p>{location.name}</p>
        <br />
        <p>{location.dimension}</p>
      </div>
      <div>
        <Modal
          visible={isOpen}
          onOk={handlerOpenModal}
          onCancel={handlerOpenModal}
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
          <strong>Species: </strong>
          <br />
          {residents.map((res: Location) => {
            return (
              <div className="sub-container" key={location.id}>
                <p>{res.name}</p>
                <img alt={res.name} src={res.image} />
              </div>
            );
          })}
        </Modal>
      </div>
    </div>
  );
};

export default Location;
