import React from 'react';
import './styles/App.scss';
import Header from './components/layout/Header';
import About from './components/sections/About';
import Blogs from './components/sections/Blogs';
import Contact from './components/sections/Contact';
import Home from './components/sections/Home';
import Skills from './components/sections/Skills';
import Footer from './components/layout/Footer';
import appData from './appData/appData.json'


function App() {
  console.log(appData);
  return (
    <div className="App">
      <Header brand={appData.brand}/>
      <Home name={appData.name} headline={appData.headline}/>
      <About name={appData.name} about={appData.about}/>
      <Skills skills={appData.skills}/> 
      <Blogs blogs={appData.blogs}/> 
      <Contact />  
      <Footer /> 
    </div>
  );
}

export default App;
