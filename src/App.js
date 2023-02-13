// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import Pagination from "./Components/Pagination";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./Components/Favourites";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
          <NavBar />
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
              </>
            }
          ></Route>

          <Route path="/fav" element={<Favourites></Favourites>}></Route>

          <Route path="*" element={
            <PageNotFound></PageNotFound>
          } ></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
