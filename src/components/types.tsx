export interface charInterface{
    character: {
      id: number;
      name: string;
      type: string;
      gender: string;
      species: string;
      image: string;
    };
}
export interface locInterface{
  location: {
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
  };
}
export interface epiInterface{
  episode: {
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
  };
}