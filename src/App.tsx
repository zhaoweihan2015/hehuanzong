import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./layout";
import Start from "./pages/Start";
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Layout />} >
          <Route index element={<Start />} />
          <Route path="/game" element={<Game />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
