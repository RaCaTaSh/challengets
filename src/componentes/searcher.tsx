import React from "react";
import "./styles.css";
import Filters from "./filters";
import { useState,FC  } from "react";
import { DeleteOutlined } from "@ant-design/icons";
const Searcher:FC  = () => {
  const [tipe, setTipe] = useState<string>("");

  type FormElement=React.FormEvent<HTMLElement>

  const cleanSeacher = (e:FormElement) => {
    e.preventDefault();
    setTipe("");
  };
  console.log(tipe);
  return (
    <div>
      <form className="searchform">
        <input
          type="text"
          id="searcher"
          placeholder="Ej: Morty"
          onChange={(e) => setTipe(e.target.value)}
          name="search"
        />
        <button onClick={cleanSeacher}>
          <DeleteOutlined className="icon" />
        </button>
      </form>
      <Filters search={tipe} />
    </div>
  );
};
export default Searcher;
