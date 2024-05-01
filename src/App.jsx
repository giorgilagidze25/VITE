import React, { Component, useEffect, useState } from "react";
import Background from "./Components/background/Background";
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Explorer from "./Components/Explorer/Explorer";
import Contact from "./Components/Contact/Contact";

function App() {
  const heroData = [
    { text1: 'Dive into', text2: 'what you love' },
    { text1: 'Indulge', text2: 'your passions' },
    { text1: 'Give in to', text2: 'your passions' },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  
  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count==2?0:count+1})
    },3000)
  },[])
let component
  switch(window.location.pathname){
    case'/':
    component = App
    break
    case '/home':
    component= <Home/>
    break
    case '/about':
    component=<About/> 
    break
     case'/explorer':
     component=<Explorer/>
     break
     case'/contact':
     component=<Contact/>
     break
  }
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
       {component}  
     <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
}

export default App;
