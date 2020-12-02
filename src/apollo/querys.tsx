import React, { FC } from "react";
import CharactersQuery from "./queryChars";
import LOCATIONS_QUERY from "./querryLocat";
import EPISODE_QUERY from "./querryEpis";
interface QuerysProps {
  option: string;
  search: string;
}
const Querys: FC<QuerysProps> = ({ option, search }) => {
  
  const char: boolean = option === "charactername" || option === "charactertype";
  const loc : boolean = option === "locationname"  || option === "locationtype";
  const epi : boolean = option === "episodename"   || option === "episodeepisode";

  if (search.length > 2) {
    if (char) return <CharactersQuery search={search} option={option} />;
    if (loc) return <LOCATIONS_QUERY search={search} option={option} />;
    if (epi) return <EPISODE_QUERY search={search} option={option} />;
    if (option === "") return null;
  } else {
    return null;
  }
  return <></>;
};

export default Querys;
