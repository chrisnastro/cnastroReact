// import { useState } from 'react'
import * as React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PortfolioContainer from './components/PortfolioContainer';
import { Route, Routes } from 'react-router';

function App() {
  const [currentPage, setCurrentPage] = React.useState('');

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
}

export default App
