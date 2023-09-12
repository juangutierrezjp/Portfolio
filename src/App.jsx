import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router";
import './App.css'
import Home from './components/Home/Home'
import ThemeSelector from './components/ThemeSelector/ThemeSelector'
import LangSelector from './components/LangSelector/LangSelector'
import Opener from './components/Opener/Opener';
import VerticalLine from './components/lines/VerticalLine';



function App() {
  const [color, setcolor] = useState("black")
  const [lang, setLang] = useState("ES")



  return (

<Routes>
    
  <Route path="/" element={
    
    
    <div>
  <Opener lang={lang} setLang={setLang} color={color} setcolor={setcolor} />
  <Home color={color} setColor={setcolor} lang={lang}/>
  </div>
    } />

</Routes>
  )
}

export default App
