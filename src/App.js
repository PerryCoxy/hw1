import {Routes, Route} from 'react-router-dom';

import './App.css';
import Main from "./pages/Main";
import Biography from "./pages/Biography";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Main/>}/>
        <Route path="bio/:id" element={<Biography/>}/>
        <Route path="/characters" element={<Main/>}/>
        <Route path="characters/bio/:id" element={<Biography/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Route>
    </Routes>
  );
}

export default App;
