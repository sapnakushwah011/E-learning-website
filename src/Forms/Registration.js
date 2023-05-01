import React from 'react';
import Header from '../Components/Header';
import MyNavbar from '../Components/MyNavbar';
import Footer from '../Components/Footer';
import "./Registration.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio
}
from 'mdb-react-ui-kit';

const Registration = () => {
  return (
    <div>
      <Header/>
      <MyNavbar/>
      <div className='head-text'>
       <div className='head-image '>
       <img src = '/images/background_image.png' alt = "contact" style={{ width:1300 , height:400  }}/>
       </div>
       <div class='text-on-image' >
             <span style={{color :'#fff' ,fontFamily :"fantasy"}}>
              <h1>Join Us</h1></span>
       </div>
      </div>
      <div className='container'>
      <MDBContainer fluid className='bg-white'>

   <MDBRow className='d-flex justify-content-center align-items-center h-100'>
   <MDBCol>

    <MDBCard className='my-4'>

      <MDBRow className='g-0'>

        <MDBCol md='6' className="d-none d-md-block">
          <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="Sample photo" className="rounded-start" fluid/>
        </MDBCol>

        <MDBCol md='6'>

          <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
            <h3 className="mb-5 text-uppercase fw-bold">Registration form</h3>

            <MDBRow md='6'>
                <MDBInput wrapperClass='mb-4' label='Name' size='lg' id='form1' type='text'/>
            </MDBRow>

            <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form3' type='email'/>

            {/* <div className='d-md-flex ustify-content-start align-items-center mb-4'>
              <h6 class="fw-bold mb-0 me-4">Gender: </h6>
              <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
              <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
              <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
            </div> */}

            <MDBInput wrapperClass='mb-4' label='Mobile Number' size='lg' id='form4' type='number'/>
            <MDBInput wrapperClass='mb-4' label='Enter Password' size='lg' id='form5' type='password'/>
            <MDBInput wrapperClass='mb-4' label='Enter Re-Password' size='lg' id='form6' type='password'/>

            <div className="d-flex justify-content-end pt-3">
              <MDBBtn className='ms-2 w-100 btn-dark btn-lg btn-block' color='warning'>Submit </MDBBtn>
            </div>

          </MDBCardBody>

        </MDBCol>
      </MDBRow>

    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
      </div><br/>
      <Footer/>
    </div>
  )
}

export default Registration
