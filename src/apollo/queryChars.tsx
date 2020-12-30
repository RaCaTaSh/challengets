import React, { useState, useEffect, FC } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import Character from "../components/character";
import Loader from "../components/loader";
import { Pagination } from "antd";
import Card from "../components/all";

interface Props {
  search: string;
  option: string;
}
interface ICharacter {
  id: number;
  name: string;
  type: string;
  gender: string;
  species: string;
  image: string;
}
const CharactersQuery: FC<Props> = ({ search, option }) => {
  const [searchs, setSearchs] = useState<any>([]);
  const [page, setPage] = useState<number>(1);

  const GET_CHARACTERS = gql`
    query GET_CHAR($name: String, $page: Int, $type: String) {
      characters(page: $page, filter: { name: $name, type: $type }) {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          type
          gender
          species
          image
        }
      }
    }
  `;

  var searchname: string;
  var searchtype: string;

  if (option === "charactername") {
    searchname = search;
    searchtype = "";
  } else {
    searchname = "";
    searchtype = search;
  }
  const { data, loading, error } = useQuery(GET_CHARACTERS, {
    variables: { name: searchname, page: page, type: searchtype },
  });
  const onChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    if (data && !loading && !error) {
      setSearchs([...data.characters.results]);
    }
  }, [data, error, loading]);

  if (loading)
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  if (error) return <h2 className="error">No results found</h2>;

  return (
    <div>
      <div className="contenedor">
        {searchs.map((search: ICharacter) => {
          return <Card data={search} type="characters" key={search.id}/>;
        })}
        {data.characters.info.pages != "1" ? (
          <div className="pagination">
            <Pagination
              current={page}
              onChange={onChange}
              total={data.characters.info.pages * 10}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CharactersQuery;

{
  /* <Card data={search} type="characters"/> */
}
