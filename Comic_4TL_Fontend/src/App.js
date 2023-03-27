import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Index from "./page/Home";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Index></Index>
      <Footer></Footer>
    </div>
  );
}

export default App;
