import "./App.css";
import "antd/dist/reset.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PokemonDetails } from "./components/PokemonDetails";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
