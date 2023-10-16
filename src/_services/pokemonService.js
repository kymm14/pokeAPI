import axios from "axios";

import { global } from "../_config/global";

const pokemonService = {};

pokemonService.getPokemons = async (page = 1) => {
  const options = {
    method: "GET",
    url: `${global.POKEAPI_URL}/pokemon`,
    // params: { offset: , page },
  };
  //   await sleep(2000); // TODO
  const response = await axios.request(options);

  return response.data;
};

pokemonService.getPokemonsByIdOrName = async (idOrName) => {
  const options = {
    method: "GET",
    url: `${global.POKEAPI_URL}/pokemon/${idOrName}`,
  };
  //   await sleep(2000); // TODO
  const response = await axios.request(options);

  return response.data;
};

pokemonService.getPokemonsByUrl = async (url) => {
  const options = {
    method: "GET",
    url: url,
  };
  //   await sleep(2000); // TODO
  const response = await axios.request(options);

  return response.data;
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default pokemonService;
