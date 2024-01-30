import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import FavouritePage from "./pages/FavouritePage";
import Homepage from "./pages/Homepage";
import { FavouriteProvider } from "./providers/FavouriteProvider";

function App() {
  return (
    <Router basename="/">
      <>
        <Header />
        <FavouriteProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/favourite" element={<FavouritePage />} />
          </Routes>
        </FavouriteProvider>
      </>
    </Router>
  );
}

export default App;
