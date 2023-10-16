import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pokemonService from "../_services/pokemonService";
// import mealService from "../_services/mealService";

export default function PokemonDetailPage() {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});
  // const [meal, setMeal] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    try {
      const response = await pokemonService.getPokemonsByIdOrName(id);
      console.log(response);
      setPokemon(response);
      //getMeal();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // const getMeal = async () => {
  //   try {
  //     const response = await mealService.getRandom();
  //     console.log(response);
  //     setMeal(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      {!isLoading && (
        <>
          <h1>{pokemon.name}</h1>
          <h2>{pokemon.type}</h2>
          {/* <h2>{meal.}</h2> */}
        </>
      )}
    </div>
  );
}
