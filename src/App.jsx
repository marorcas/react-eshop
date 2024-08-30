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
      <BrowserRouter basename={"/react-eshop/"}>
        <Header/>
        <NavBar/>
        <ItemsContextProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />
                <Route path="/:itemsCategory/:itemsType/:id" element={<ContentLoader />} />
                <Route path="/:itemsCategory/:itemsType" element={<ContentLoader />} />
                <Route path="/:itemsCategory" element={<ContentLoader />} />
                <Route path="/favourites" element={<FavouriteListPage />} />
            </Routes>
        </ItemsContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
