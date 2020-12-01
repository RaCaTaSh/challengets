import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import Location from "../componentes/location";
import { useState, useEffect } from "react";
import Loader from "../componentes/loader";
import React from 'react'
import { Pagination } from "antd";
const LOCATIONS_QUERY = ({ search,option }) => {
  const [locs, setLocs] = useState([]);
  const [page, setPage] = useState(1);
  const GET_LOCATIONS = gql`
    query GET_LOCS($name: String, $page: Int,$type:String) {
      locations(page: $page, filter: { name: $name ,type:$type }) {
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
  var searchname:string;
  var searchtype:string;
 
  if (option === "locationname") {
    searchname=search
    searchtype=''
  }else{
    searchname=''
    searchtype=search
  }
  const { data, loading, error } = useQuery(GET_LOCATIONS, {
    variables: { name: searchname , page: page,type: searchtype},
  });

  const onChange = (page:number) => {
    setPage(page);
  };

  useEffect(() => {
    if (data && !loading && !error) {
      setLocs([...data.locations.results]); 
    }
  }, [data,loading,error]);
  if (loading) return <Loader className="loader"/>;
  if (error) return <h2 className="error">No results found</h2>;

  return (
    <div>
      <div className="contenedor">
        {locs.map((location) => {
          return <Location location={location} key={location.id} />;
        })}
        <div className="pagination">
          <Pagination
            current={page}
            onChange={onChange}
            total={data.locations.info.pages * 10}
          />
        </div>
      </div>
    </div>
  );
};
export default LOCATIONS_QUERY;
