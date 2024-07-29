import { useState } from 'react'
// import './App.css'
import NavigationBar from './components/Navbar'
import CardList from './components/CardList'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm.min';

function App() {
  return (
    <>
        <NavigationBar />
        <CardList />
    </>
  )
}

export default App
