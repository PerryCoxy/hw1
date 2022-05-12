import { Route, Routes, useMatch } from 'react-router-dom';
import './App.css';
import Layout from "./components/Layout";
import About from "./pages/About";
import Biography from "./pages/Biography";
import Characters from "./pages/Characters";
import Contacts from "./pages/Contacts";
import Login from './pages/Login';
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";


function App() {
  const match = useMatch({ path: '/login' });
  return (
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
  );
}

export default App;
