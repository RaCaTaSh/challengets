export interface charInterface {
  id: number;
  name: string;
  type: string;
  gender: string;
  species: string;
  image: string;
}
export interface locInterface {
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
export interface epiInterface {
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
