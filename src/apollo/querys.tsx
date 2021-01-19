import React, { FC } from "react";
import CharactersQuery from "./queryChars";
import LOCATIONS_QUERY from "./querryLocat";
import EPISODE_QUERY from "./querryEpis";
interface Props {
  option: string;
  search: string;
}
const Querys: FC<Props> = ({ option, search }) => {
  
  const char: boolean = option === "charactername" || option === "charactertype";
  const loc : boolean = option === "locationname"  || option === "locationtype";
  const epi : boolean = option === "episodename"   || option === "episodeepisode";
  const op:string=option
  if (search.length > 2) {
    if (char) return <CharactersQuery search={search} option={op} />;
    if (loc) return <CharactersQuery search={search} option={op} />;
    if (epi) return <CharactersQuery search={search} option={op} />;
    if (option === "") return null;
  } else {
    return null;
  }
  return <></>;
};

export default Querys;
