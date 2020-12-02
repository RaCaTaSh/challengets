import React, { useState, useEffect, FC } from "react";
import { gql } from "apollo-boost";
import Episode from "../componentes/episode";
import Loader from "../componentes/loader";
import { useQuery } from "@apollo/client";
import { Pagination } from "antd";

interface IEpisodesQueryProps {
  search: string;
  option: string;
}
interface IEpisode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: [
    {
      name: string;
      image: string;
    }
  ];
}
const EPISODE_QUERY: FC<IEpisodesQueryProps> = ({ search, option }) => {
  const [epis, setEpis] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const GET_EPISODES = gql`
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
  var searchname: string;
  var searchepisode: string;

  if (option === "episodename") {
    searchname = search;
    searchepisode = "";
  } else {
    searchname = "";
    searchepisode = search;
  }
  const { data, loading, error } = useQuery(GET_EPISODES, {
    variables: { name: searchname, page: page, episode: searchepisode },
  });
  const onChange = (page: number) => {
    setPage(page);
  };
  useEffect(() => {
    if (data && !loading && !error) {
      setEpis([...data.episodes.results]);
    }
  }, [data, loading, error]);
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
        {epis.map((episode: IEpisode) => {
          return <Episode episode={episode} key={episode.id} />;
        })}

        <div className="pagination">
          <Pagination
            current={page}
            onChange={onChange}
            total={data.episodes.info.pages * 10}
          />
        </div>
      </div>
    </div>
  );
};
export default EPISODE_QUERY;
