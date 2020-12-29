import React, { FC, useState } from "react";
import "./styles.css";
import { Modal } from "antd";

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
  const [modal, setModal] = useState<boolean>(false);
  const HideModal = (): void => {
    setModal(false);
  };
  const ShowModal = (): void => {
    setModal(true);
  };
  const residents = [];

  for (let i = 0; i < 5; i++) {
    residents.push(location.residents[i]);
    if (i === location.residents.length - 1) {
      break;
    }
  }

  return (
    <div key={location.id}>
      <div className="location" onClick={ShowModal}>
        <p>{location.name}</p>
        <br />
        <p>{location.dimension}</p>
      </div>
      <div>
        <Modal
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
