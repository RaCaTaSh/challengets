import React,{FC} from "react";
import "./styles.css";
import { useState  } from "react";
import Querys from "../apollo/querys";
/* type FormElement=React.FormEvent<HTMLElement> */
interface FiltersProps{
  search:string
}
type FormElement=React.FormEvent<HTMLElement>
const Filters:FC<FiltersProps>= ({ search })=> {
  const [option, setOption] = useState<string>("charactername");
  const optionChange = (event:FormElement) => {
    setOption(event.target.value);
  };
  return (
    <div>
      <div className="filtros">
        <img
          alt="rick y morty"
          src="https://wi.wallpapertip.com/wsimgs/33-336613_rick-and-morty-wallpaper-4k.jpg"
        />
        <h1>Filters</h1>
        <form>
          <h2>Characters</h2>
          <ul>
            <li>
              <p className="input-label">
                <input
                  type="radio"
                  id="charactername"
                  name="filter"
                  value="charactername"
                  onChange={optionChange} // eslint-disable-next-line
                  checked={option == "charactername"}
                />
                <label>Name</label>
              </p>
            </li>
            <li>
              <p className="input-label">
                <input
                  type="radio"
                  id="charactertype"
                  name="filter"
                  value="charactertype"
                  onChange={optionChange} // eslint-disable-next-line
                />
                <label>Type</label>
              </p>
            </li>
          </ul>
          <h2>Locations</h2>
          <ul>
            <li>
              <p className="input-label">
                <input
                  type="radio"
                  id="locationname"
                  name="filter"
                  value="locationname"
                  onChange={optionChange}
                />
                <label>Name</label>
              </p>
            </li>
            <li>
              <p className="input-label">
                <input
                  type="radio"
                  id="locationtype"
                  name="filter"
                  value="locationtype"
                  onChange={optionChange}
                />
                <label>Type</label>
              </p>
            </li>
          </ul>
          <h2>Characters</h2>
          <ul>
            <li>
              <p className="input-label">
                <input
                  type="radio"
                  id="episodename"
                  name="filter"
                  value="episodename"
                  onChange={optionChange}
                />
                <label >Name</label>
              </p>
            </li>
            <li>
              <p className="input-label">
                <input
                  type="radio"
                  id="episodeepisode"
                  name="filter"
                  value="episodeepisode"
                  onChange={optionChange}
                />
                <label>Episode</label>
              </p>
            </li>
          </ul>
        </form>
      </div>
      <Querys search={search} option={option} className="busc" />
    </div>
  );
}
export default Filters;
