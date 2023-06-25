import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";
import { NavBar } from "./components/NavBar";
import MyContextProvider from "./context/useContext";

function App() {
  return (
    <BrowserRouter>
      <MyContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </MyContextProvider>
    </BrowserRouter>
  );
}

export default App;
