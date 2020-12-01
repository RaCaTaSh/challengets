import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import Episode from "../componentes/episode";
import { useState, useEffect } from "react";
import Loader from "../componentes/loader";
import React from 'react'
import { Pagination } from "antd";
const EPISODE_QUERY = ({ search,option }) => {
  const [epis, setEpis] = useState([]);
  const [page, setPage] = useState(1);
  const GET_EPISODES = gql`
    query GET_EPIS($name: String, $page: Int,$episode:String) {
      episodes(page: $page, filter: { name: $name ,episode:$episode }) {
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
  var searchname;
  var searchepisode;
  console.log(search , option)
  if (option === "episodename") {
    searchname=search
    searchepisode=''
  }else{
    searchname=''
    searchepisode=search
  }
  const { data, loading, error } = useQuery(GET_EPISODES, {
    variables: { name: searchname, page: page ,episode: searchepisode},
  });
  const onChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    if (data && !loading && !error) {
      setEpis([...data.episodes.results]);
    } 
  }, [data,loading,error]);
  if (loading) return <Loader className="loader" />;
  if (error) return <h2 className="error">No results found</h2>;

  return (
    <div>
      <div className="contenedor">
        {epis.map((episode) => {
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
