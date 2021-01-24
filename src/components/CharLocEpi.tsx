import React, { useState, useEffect, FC } from "react";
import { useQuery } from "@apollo/client";
import Loader from "./loader";
import { Pagination } from "antd";
import Card from "./Card";
import {
  characterQuery,
  locationQuery,
  episodeQuery,
} from "../apollo/querys/allQuerys";
interface Props {
  search: string;
  option: string;
}

const CharLocEpisQuery: FC<Props> = ({ search, option }) => {
  const [searchs, setSearch] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [totalpages, setTotalpages] = useState<number>(1);

  function QueryType(option: string): any {
    if (option.startsWith("character")) {
      return characterQuery;
    }
    if (option.startsWith("location")) {
      return locationQuery;
    }
    if (option.startsWith("episode")) {
      return episodeQuery;
    }
  }
  var searchname: string = "";
  var searchtype: string = "";
  if (
    option === "charactername" ||
    option === "locationname" ||
    option === "episodename"
  ) {
    searchname = search;
    searchtype = "";
  }
  if (
    option === "charactertype" ||
    option === "locationtype" ||
    option === "episodeepisode"
  ) {
    searchname = "";
    searchtype = search;
  }
  const { data, loading, error } = useQuery(QueryType(option), {
    variables: { name: searchname, page: page, type: searchtype , episode:searchtype },
  });
  const onChange = (page: number): void => {
    setPage(page);
  };

  useEffect(() => {
    if (data && !loading && !error) {
      if (option.startsWith("character")) {
        setTotalpages(data.characters.info.pages);
        setSearch([...data.characters.results]);
      }
      if (option.startsWith("location")) {
        setTotalpages(data.locations.info.pages);
        setSearch([...data.locations.results]);
      }
      if (option.startsWith("episode")) {
        setTotalpages(data.episodes.info.pages);
        setSearch([...data.episodes.results]);
      }
    } // eslint-disable-next-line
  }, [data]);

  if (loading) return <Loader />
  if (error) return <h2 className="error">No results found</h2>;

  return (
    <div>
      <div className="contenedor">
        {searchs.map((search: any) => {
          return <Card data={search} type={option} key={search.id} />;
        })}
        {totalpages !== 1 ? (
          <div className="pagination">
            <Pagination
              current={page}
              onChange={onChange}
              total={totalpages * 10}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CharLocEpisQuery;
