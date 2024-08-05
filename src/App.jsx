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
            <Routes>
              <Route path="/" element={<LandingPage />} />
                <Route path="/:itemsCategory/:itemsType/:id" element={<ContentLoader />} />
                <Route path="/:itemsCategory/:itemsType" element={<ContentLoader />} />
                <Route path="/:itemsCategory" element={<ContentLoader />} />
            </Routes>
        </ItemsContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
