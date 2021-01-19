import React, { useState, useEffect, FC } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import Loader from "../components/loader";
import { Pagination } from "antd";
import Card from "../components/CharLocEpi";

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
  const [totalpages,setTotalpages]=useState<number>(1)
  function QueryType(option: string): any {
    if (option.startsWith("character")) {
      return gql`
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
    }
    if (option.startsWith("location")) {
      return gql`
        query GET_LOCS($name: String, $page: Int, $type: String) {
          locations(page: $page, filter: { name: $name, type: $type }) {
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
              dimension
              residents {
                name
                image
              }
            }
          }
        }
      `;
    }
    if (option.startsWith("episode")) {
      return gql`
        query GET_EPIS($name: String, $page: Int, $episode: String) {
          episodes(page: $page, filter: { name: $name, episode: $episode }) {
            info {
              count
              pages
              next
              prev
            }
            results {
              id
              name
              air_date
              episode
              characters {
                name
                image
              }
            }
          }
        }
      `;
    }
  }

  var searchname: string;
  var searchtype: string;

  if (option === "charactername" || "locationname" || "episodename") {
    searchname = search;
    searchtype = "";
  } else {
    searchname = "";
    searchtype = search;
  }
  const { data, loading, error } = useQuery(QueryType(option), {
    variables: { name: searchname, page: page, type: searchtype },
  });
  const onChange = (page: number): void => {
    setPage(page);
  };
  
  useEffect(() => {
    if (data && !loading && !error) {
      if (option.startsWith("character")) {
        setSearchs([...data.characters.results]);
        setTotalpages(data.characters.info.pages)
      }
      if (option.startsWith("location")) {
        setSearchs([...data.locations.results]);
        setTotalpages(data.locations.info.pages)
      }
      if (option.startsWith("episodes")) {
        setSearchs([...data.episodes.results]);
        setTotalpages(data.episodes.info.pages)
      }
    } // eslint-disable-next-line
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
      {console.log(data)}
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

export default CharactersQuery;
