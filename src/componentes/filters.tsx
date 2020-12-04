import React, { FC } from "react";
import "./styles.css";
import { useState } from "react";
import Querys from "../apollo/querys";

interface FiltersProps {
  search: string;
}
type FormElement = React.ChangeEvent<HTMLInputElement>;
const Filters: FC<FiltersProps> = ({ search }) => {
  const [option, setOption] = useState<string>("charactername");
  const optionChange = (event: FormElement) => {
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
          <div>
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
                  <label htmlFor="charactername">Name</label>
                </p>
              </li>
              <li>
                <p className="input-label">
                  <input
                    type="radio"
                    id="charactertype"
                    name="filter"
                    value="charactertype"
                    onChange={optionChange}
                  />
                  <label htmlFor="charactertype">Type</label>
                </p>
              </li>
            </ul>
          </div>
          <div>
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
                  <label htmlFor="locationname">Name</label>
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
                  <label htmlFor="locationtype">Type</label>
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2>Episodes</h2>
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
                  <label htmlFor="episodename">Name</label>
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
                  <label htmlFor="episodeepisode">Episode</label>
                </p>
              </li>
            </ul>
          </div>
        </form>
      </div>
      <div className="busc">
        <Querys search={search} option={option} />
      </div>
    </div>
  );
};
export default Filters;
