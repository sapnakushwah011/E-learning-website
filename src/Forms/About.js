import React from 'react'
import MyNavbar from '../Components/MyNavbar';
import Header from '../Components/Header';
import '../Forms/Contact/Contact.css';

const About = () => {


  return (
    <>
  <Header/>
	 <MyNavbar/>
   <div className='head-text'>
       <div className='head-image '>
       <img src = '/images/background_image.png' alt = "contact" style={{ width:1300 , height:400  }}/>
       </div>
       <div class='text-on-image' >
             <span style={{color :'#fff' ,fontFamily :"fantasy"}}>
              <h1>About Us</h1></span>
       </div>
      </div>
   
   </>
  )
}

export default About
