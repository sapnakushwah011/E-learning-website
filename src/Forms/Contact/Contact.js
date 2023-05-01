import React, { useEffect, useState } from 'react'
import MyNavbar from '../../Components/MyNavbar';
import Header from '../../Components/Header';
import '../Contact/Contact.css';
import Footer from '../../Components/Footer';

const Contact = () => {
  const[data ,setData]= useState([]);

      /// for testing....

  const fetchData = async()=>{
    try{
         const resp = await fetch('http://localhost:4000/api/user');
         const apiData = await resp.json();
         console.log(apiData) ;
         setData(apiData);
    }   
    catch(error){
       console.log(`Error....${error}`);
    }
  }

  useEffect(()=>{
     fetchData();
  },[])
  
  ///// end /////

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
              <h1>Contact Us</h1></span>
       </div>
      </div>


      
        <div  style={{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:50,marginTop:70,lineHeight:'26px'}}>
        <h1>Educap Contact Centre</h1>
        <p>
         Be it a service that you need, be it a position that you seek, or you just like what you have seen so far;
         do not hesitate to reach out. We're excited to start a conversation.
         </p>
        </div>
        <div style={{ fontFamily:'revert' ,marginLeft:350,marginTop:30,lineHeight:'26px'}}>
          <h1>Office Address</h1>
          <p>
             First Floor, Ansia Plaza, Near Mayur 
             Market, Thatipur, Gwalior</p>
             <p>Contact Number: +91-9876543210</p>
             <p>Email: Educap@gmail.ac.in</p>
          
        </div>
        <Footer/>
    </>
  )
}  

export default Contact
