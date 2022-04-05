import React from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import SocialsPage from './pages/socials/socials.component';
import AboutPage from './pages/about/about.component';
import PinkPaperPage from './pages/pink-paper/pink-paper.component';
import NavBar from './components/navigation/navbar.component';
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
import useCheckMobileScreen from './components/mobile-checker/mobile-checker.component';



function App() {
  return (
    <div>
      {useCheckMobileScreen(700) ? 
        <Header/> 
        : (
            <NavBar/>
        )}
      <HomePage/>
      <SocialsPage/>
      <AboutPage/>
      <PinkPaperPage/>
      <Footer/>
    </div>
  );
}

export default App;
