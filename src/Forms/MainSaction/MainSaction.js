import React from 'react';
import Typewriter from 'typewriter-effect';
import '../MainSaction/MainSaction.css'
import { Col, Container, Row } from 'react-bootstrap';

const MainSaction = ()=>{

return (
<>
<Container>
    <Row>
     <Col lg= '6' md='6' >
        <div className='contant'>
       <h2 className="mb-4">
        Anytime Anywhere <br/> Learn on your <br/>
        Suitable Schedule
     </h2>
     <p className='mb-4'>
     Any successful career starts with good education. Together<br/>
     with us you will have deeper knowledge of the subjects<br/>
     that will be especially useful for you when climbing <br/>
      the career ladder.

     </p>
     </div>
     </Col>
     <Col lg= '6' md='6' >
       <img src="/images/mainImg.png" alt=" " height={500}  width={500}/>
     </Col>
    </Row>
</Container>
{/* <div className="top-saction">
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Educap")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString(" Anytime Anywhere Learn on your Suitable Schedule.")
       .start();
       }}
       />
    </div> */}
    </>
)
}

export default MainSaction ;