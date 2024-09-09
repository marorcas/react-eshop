import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import { populateFirestoreDb } from "./services/data-service";
import ItemsContextProvider from "./context/ItemsContextProvider/ItemsContextProvider";
import ContentLoader from "./container/ContentLoader/ContentLoader";
import FavouriteListPage from "./pages/FavouriteListPage/FavouriteListPage";

function App() {

  useEffect(() => {
    populateFirestoreDb();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header/>
        <NavBar/>
        <ItemsContextProvider>
            <Routes>
              <Route path="/react-eshop" element={<LandingPage />} />
                <Route path="/react-eshop/:itemsCategory/:itemsType/:id" element={<ContentLoader />} />
                <Route path="/react-eshop/:itemsCategory/:itemsType" element={<ContentLoader />} />
                <Route path="/react-eshop/:itemsCategory" element={<ContentLoader />} />
                <Route path="/react-eshop/favourites" element={<FavouriteListPage />} />
            </Routes>
        </ItemsContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
