import React, { FC, useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import Loader from "../components/loader";
import { Pagination } from "antd";
import Card from "../components/CharLocEpi";

interface Props {
  search: string;
  option: string;
}
interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [
    {
      name: string;
      image: string;
    }
  ];
}
const LOCATIONS_QUERY: FC<Props> = ({ search, option }) => {
  const [locs, setLocs] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const GET_LOCATIONS = gql`
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
  var searchname: string;
  var searchtype: string;

  if (option === "locationname") {
    searchname = search;
    searchtype = "";
  } else {
    searchname = "";
    searchtype = search;
  }
  const { data, loading, error } = useQuery(GET_LOCATIONS, {
    variables: { name: searchname, page: page, type: searchtype },
  });

  const onChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    if (data && !loading && !error) {
      setLocs([...data.locations.results]);
    }
  }, [data, loading, error]);
  if (loading)
    return (
      <div className="loader">
        {" "}
        <Loader />
      </div>
    );
  if (error) return <h2 className="error">No results found</h2>;
 
  return (
    <div>
      <div className="contenedor">
        {locs.map((location: ILocation) => {
          return <Card data={location} type="locations" key={location.id}/>
        })}
        {data.locations.info.pages !== "1" ? (
          <div className="pagination">
            <Pagination
              current={page}
              onChange={onChange}
              total={data.locations.info.pages * 10}
            />
          </div>
        ) : null} 
      </div>
    </div>
  );
};
export default LOCATIONS_QUERY;
