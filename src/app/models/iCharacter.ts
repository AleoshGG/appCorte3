export interface iCharacter {
  id: number;
  name: String;
  status: String;
  species: String;
  gender: String;
  image: String;
  location: {
    name: String;
    URL: String;
  };
}
