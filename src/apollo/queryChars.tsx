import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import Character from "../componentes/character";
import { useState, useEffect ,FC} from "react";
import Loader from "../componentes/loader";
import { Pagination } from "antd";
import React from 'react'

interface CharactersQueryProps {
  search:string,
  option:string
}

const CharactersQuery:FC<CharactersQueryProps>=({ search, option })=> {
  const [searchs, setSearchs] = useState([]);
  const [page, setPage] = useState(1);
  const GET_CHARACTERS = gql`
    query GET_CHAR($name: String, $page: Int,$type:String) {
      characters(page: $page, filter: { name: $name ,type:$type }) {
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
  var searchname:string;
  var searchtype:string;
  
  if (option === "charactername") {
    searchname=search
    searchtype=''
  }else{
    searchname=''
    searchtype=search
  }
  const { data, loading, error } = useQuery(GET_CHARACTERS, {
    variables: { name: searchname, page: page, type: searchtype },
  });
  console.log(data)
  console.log(loading)
  console.log(error)
  const onChange = (page:number) => {
    setPage(page);
  };

  useEffect(() => {
    if (data && !loading && !error) {
      setSearchs([...data.characters.results]);
    } 
  }, [data,error,loading]);

  if (loading) return <Loader className="loader" />;
  if (error) return <h2 className="error">No results found</h2>;
  return (
    <div>
      <div className="contenedor">
        {searchs.map((search) => {
          return <Character character={search} key={search.id} />;
        })}
        <div className="pagination">
          <Pagination
            current={page}
            onChange={onChange}
            total={data.characters.info.pages * 10}
          />
        </div>
      </div>
    </div>
  );
}

export default  CharactersQuery;