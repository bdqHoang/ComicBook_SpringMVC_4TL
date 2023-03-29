import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Index from "./page/Home";
import Login from "./page/User/Login";
import Profile from "./page/User/Profile";
// import Genre from './page/Genre';
// import Blog from './page/Blog/Blog';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./page/User/Register";
import MangaSinglePage from "./page/Manga/MangaSinglePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route
            path={"/home"}
            Index
            element={
              <div className="App">
                <Header></Header>
                <Index></Index>
                <Footer></Footer>
              </div>
            }
          />
          <Route
            path={""}
            Index
            element={
              <div className="App">
                <Header></Header>
                <Index></Index>
                <Footer></Footer>
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div className="App">
                <Header></Header>
                <Login></Login>
                <Footer></Footer>
              </div>
            }
          />

          <Route
            path="/sign-in"
            element={
              <div className="App">
                <Header></Header>
                <SignIn></SignIn>
                <Footer></Footer>
              </div>
            }
          />

          <Route
            path="/profile"
            element={
              <div className="App">
                <Header></Header>
                <Profile></Profile>
                <Footer></Footer>
              </div>
            }
          />

          <Route
            path="/manga-single"
            element={
              <div className="App">
                <Header></Header>
                <MangaSinglePage></MangaSinglePage>
                <Footer></Footer>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
