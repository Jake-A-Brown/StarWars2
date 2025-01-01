// categoryDataMap.js
import MovieData from "../../data/moviedata";
import PeopleData from "../../data/peopledata";
import PlanetData from "../../data/planetdata";
import SpeciesData from "../../data/speciesdata";
import StarshipData from "../../data/starshipdata";
import VehicleData from "../../data/vehicledata";

const CategoryDataMap = {
  films: { data: MovieData, imageKey: 'movieImageLink' },
  people: { data: PeopleData, imageKey: 'peopleImageLink' },
  planets: { data: PlanetData, imageKey: 'planetImageLink' },
  species: {data: SpeciesData, imageKey: 'speciesImageLink'},
  starships: {data: StarshipData, imageKey: 'starshipImageLink'},
  vehicles: {data: VehicleData, imageKey: 'vehicleImageLink'},
  // Add other categories...
};

export default CategoryDataMap;
