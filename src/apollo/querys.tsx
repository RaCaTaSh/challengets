import React,{FC} from "react";
import CharactersQuery from "./queryChars";
import LOCATIONS_QUERY from "./querryLocat";
import EPISODE_QUERY from "./querryEpis";
interface QuerysProps {
  option:string,
  search:string
}
const Querys:FC<QuerysProps> = ({ option, search })=> {
  if (search.length > 2) {
    if (option === "charactername" || option === "charactertype")
      return <CharactersQuery search={search} option={option} />;
    if (option === "locationname" || option === "locationtype")
      return <LOCATIONS_QUERY search={search} option={option} />;
    if (option === "episodename" || option === "episodeepisode")
      return <EPISODE_QUERY search={search} option={option} />;
    if (option === "") return null
  } else {return null}
};

export default Querys;
