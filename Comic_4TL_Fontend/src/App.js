import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Index from './page/Home';
// import Genre from './page/Genre';
// import Blog from './page/Blog/Blog';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path={"/home"} Index element={
            <div className='App'>
                <Header></Header>
                <Index></Index>
                <Footer></Footer>
            </div>} />
          {/* <Route path='/genre' element={
            <div className='App'>
                <Header></Header>
                <Genre></Genre>
                <Footer></Footer>
            </div>} />
            <Route path='/blog' element={
            <div className='App'>
                <Header></Header>
                <Blog></Blog>
                <Footer></Footer>
            </div>} /> */}
        </Route>
      </Routes>
        
    </BrowserRouter>
    
  );
}

export default App;
