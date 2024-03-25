import { useState } from 'react'
// import React from "react";
import './App.css'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PortfolioContainer from "../components/PortfolioContainer"

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PortfolioContainer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </>
  );
};

export default App
