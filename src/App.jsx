import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import { populateFirestoreDb } from "./services/data-service";
import ItemsContextProvider from "./context/ItemsContextProvider/ItemsContextProvider";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import ContentLoader from "./container/ContentLoader/ContentLoader";

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
          <ContentLoader>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/:itemsCategory/:itemsType/:id" element={<ItemPage />} />
              <Route path="/:itemsCategory/:itemsType" element={<ItemsPage />} />
              <Route path="/:itemsCategory/:id" element={<ItemPage />} />
              <Route path="/:itemsCategory" element={<ItemsPage />} />
            </Routes>
          </ContentLoader>
        </ItemsContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
