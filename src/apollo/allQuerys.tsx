import { gql } from "apollo-boost";

export const characterQuery = gql`
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
export const locationQuery = gql`
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
export const episodeQuery = gql`
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
