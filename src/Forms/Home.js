import React from 'react';
import MyNavbar from '../Components/MyNavbar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import MainSaction from './MainSaction/MainSaction';


const Home = () => {
  return (
    <>
      <Header/>
      <MyNavbar/>
      <MainSaction/>
       
    <div style={{marginTop:100,display:'flex',justifyContent:'center'}}>
         <h1>Our Popular Courses</h1>
      </div>
      <div style={{marginTop:50,display:'flex',justifyContent:'center'}}>
      <Card/>
     
     </div>
     <Footer/>
    </>
  )
}

export default Home
