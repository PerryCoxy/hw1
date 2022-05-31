import React, { useEffect, useState } from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import './App.css';
import Layout from "./components/Layout";
import { CHARACTER } from "./constants/characters";
import { Context } from "./Context";
import About from "./pages/About";
import Biography from "./pages/Biography";
import Characters from "./pages/Characters";
import Contacts from "./pages/Contacts";
import Login from './pages/Login';
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";


function App() {
  const match = useMatch({ path: '/login' });
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
      <Routes>
        {match
          ? <Route path="/login" element={<Login />} />
          : <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="characters" element={<Characters />} />
            <Route path="characters/:id" element={<Biography />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>}
      </Routes>
    </Context.Provider>
  );
}

export default App;
