import React, { useEffect, useState } from "react";
import pokemonService from "../_services/pokemonService";
import PokemonCard from "../components/pokemon-card/PokemonCard";
import { Container } from "@mui/material";

export default function PokemonListPage() {
  // hooks
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const response = await pokemonService.getPokemons();
      getPokemonsWithDetail(response.results);
      console.log(response.results);
    } catch (error) {
      console.log(error);
    } finally {
      //
    }
  };

  const getPokemonsWithDetail = async (pokemons) => {
    const pokemonsWithDetail = [];
    for (const poke of pokemons) {
      const detail = await pokemonService.getPokemonsByIdOrName(poke.name);
      // const detail = await pokemonService.getPokemonsByUrl(poke.url);
      pokemonsWithDetail.push({
        id: detail.id,
        name: poke.name,
        image: detail.sprites.other.dream_world.front_default,
        types: detail.types,
      });
    }
    setPokemons(pokemonsWithDetail);
    console.log(pokemonsWithDetail);
  };

  return (
    <>
      <Container>
        <h1>PokemonList page</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "3em",
          }}>
          {pokemons.map((poke) => (
            <PokemonCard key={poke.id} pokemon={poke} />
          ))}
        </div>
      </Container>
    </>
  );
}
