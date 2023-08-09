import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Country from './components/Country'
function App() {
  const [theme, setTheme] = useState('dark');




  const getTheme = (par) => {
    if (par) setTheme('dark');
    else setTheme('light');
  }


  return (
    <Router>
      <main className={`${theme}-main`}>
        <Header getTheme={getTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path='/Country/:name' element={<Country theme={theme} />} />
        </Routes>
      </main>

    </Router>
  );
}

export default App;