import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Start from "./pages/Start";
import Game from "./pages/Game";
import Layout from "./layout";
import { HeroProvide } from "@hooks/hero";
import { WorldProvide } from "@hooks/world";

function App() {
  return (
    <HeroProvide>
      <WorldProvide>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Start />} />
              <Route path="/game" element={<Game />} />
            </Route>
          </Routes>
        </Router>
      </WorldProvide>
    </HeroProvide>
  );
}

export default App;
