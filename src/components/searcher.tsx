import React from "react";
import "./styles.css";
import Filters from "./filters";
import { useState, FC } from "react";
import { DeleteOutlined } from "@ant-design/icons";
const Searcher: FC = () => {
  const [tipe, setTipe] = useState<string>("");
  return (
    <div>
      <form className="searchform"> 
        <input
          type="text"
          id="searcher"
          placeholder="Ej: Morty"
          onChange={(e) => setTipe(e.target.value)}
          name="search"
          value={tipe}
        />
         {tipe!=="" ? <button type="reset" onClick={()=>setTipe('')}>
          <DeleteOutlined className="icon" />
        </button> :null }
        
      </form>
      <Filters search={tipe} />
    </div>
  );
}
export default Searcher;
