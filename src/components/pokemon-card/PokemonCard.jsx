import React from "react";
import styles from "./PokemonCard.module.scss";
import { capitalCase } from "change-case";

export default function PokemonCard({ pokemon }) {
  const PokemonTypes = ({ types }) => {
    return (
      <>
        {types.map((t) => (
          <span key={t.slot} style={{ marginRight: "0.5em" }}>
            {t.type.name}
          </span>
        ))}
      </>
    );
  };
  return (
    <div className={styles.PokemonCard}>
      <img src={pokemon.image} alt='' />
      <h2>{capitalCase(pokemon.name)}</h2>
      <PokemonTypes types={pokemon.types} />
    </div>
  );
}
