import React from 'react';
import {MDBCard,MDBCardBody,MDBCardText,MDBCardImage } from 'mdb-react-ui-kit';

const Card = () => {

  
  return (
    <>
        <MDBCard style={{width:400,height:100}}>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' height={200} width={100} alt='...'  position='top' />
      <MDBCardBody>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
      
    </>
  )
}

export default Card ;
