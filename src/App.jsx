import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import FavouritePage from "./pages/FavouritePage";
import Homepage from "./pages/Homepage";
import { FavouriteProvider } from "./providers/FavouriteProvider";

function App() {
  return (
    <div>
      <Router basename="/frontend-challenge">
        <Header />
        <FavouriteProvider>
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/favourite" element={<FavouritePage />} />
          </Routes>
        </FavouriteProvider>
      </Router>
    </div>
  );
}

export default App;
