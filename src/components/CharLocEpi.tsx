import React, { FC } from "react";
import "./styles.css";
import { charInterface, epiInterface, locInterface } from "./types";
import useModal from "../hooks/useModal";
import AllModal from "./modal";
interface Props {
  data: charInterface | locInterface | epiInterface | any;
  type: string;
}

const Card: FC<Props> = ({ data, type }) => {
  const { isOpen, handlerOpenModal } = useModal();
  if (data) {
    if (type === "characters") {
      return (
        <div key={data.id} className="character">
          <div onClick={handlerOpenModal} className="character2">
            <img alt={data.name} src={data.image} />
            <h1>{data.name}</h1>
          </div>
          <div>
            <AllModal
              isOpen={isOpen}
              data={data}
              handlerOpenModal={handlerOpenModal}
              type="characters"
            />
          </div>
        </div>
      );
    }
    if (type === "locations") {
      return (
        <div key={data.id}>
          <div className="location" onClick={handlerOpenModal}>
            <p>{data.name}</p>
            <br />
            <p>{data.dimension}</p>
          </div>
          <div>
            <AllModal
              isOpen={isOpen}
              data={data}
              handlerOpenModal={handlerOpenModal}
              type="locations"
            />
          </div>
        </div>
      );
    }
    if (type === "episodes") {
      return (
        <div key={data.id}>
          <div className="episode" onClick={handlerOpenModal}>
            <p>{data.name}</p>
            <br />
            <p>{data.episode}</p>
          </div>
          <div>
            <AllModal
              isOpen={isOpen}
              data={data}
              handlerOpenModal={handlerOpenModal}
              type="episodes"
            />
          </div>
        </div>
      );
    }
  }
  return <></>;
};
export default Card;
