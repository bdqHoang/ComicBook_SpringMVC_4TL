import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Index from './page/Home';
import Login from './page/User/Login';
import Profile from './page/User/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './page/User/Register';
import Genre from './page/Genre/Genre'
import LastedManga from './components/homeComponent/lastedManga';
import MangaSignlePage from './page/Manga/MangaSinglePage';
import Chapter from './page/Manga/Chapter';


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
                <MangaSignlePage />
                <Footer></Footer>
              </div>
            }
          />
          <Route
            path="/Chapter"
            element={
              <div className="App">
                <Header></Header>
                <Chapter />
                <Footer></Footer>
              </div>
            }
          />

          <Route path='/genre' element={<div className='App'>
                <Header></Header>
                <Genre/>
                <Footer></Footer>
          </div>}/>
          <Route path='/laster-manga' element={<div className='App'>
                <Header></Header>
                <LastedManga/>
                <Footer></Footer>
          </div>}/>
          <Route path='/getmanga' element={<div className='App'>
                <Header></Header>
                <MangaSignlePage/>
                <Footer></Footer>
          </div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
