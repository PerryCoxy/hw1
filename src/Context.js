import React, { useEffect } from "react";
import { useState } from "react";
import { CHARACTER } from "./constants/characters";
export const Context = React.createContext(null);

const CharacterContext = ({ children }) => {
  const saveCharacters = JSON.parse(localStorage.getItem("triple_triad_characters"));
  const [character, setCharacter] = useState(() => saveCharacters ? saveCharacters : CHARACTER);

  useEffect(() => {
    localStorage.setItem("triple_triad_characters", JSON.stringify(character));
  }, [character])

  const handleLikeClick = id => {
    setCharacter(prevState =>
      prevState.map(item => {
        return item.id === id ? { ...item, isLike: !item.isLike } : item;
      })
    );
  };
  return (
    <Context.Provider
      value={{
        character,
        handleLikeClick
      }}
    >
      {children}
    </Context.Provider>
  )
};

export default CharacterContext;