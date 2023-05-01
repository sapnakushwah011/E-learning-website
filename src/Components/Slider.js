import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <>
    <div style={{background:'grey'}}>    

    <Carousel>
      <Carousel.Item>
        <div style={{display:'flex',justifyContent:'center'}} >
        <img src="/images/naturepic.jpg" width={1300} height={700} alt="First slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{display:'flex',justifyContent:'center'}} >
        <img src="/images/naturepic1.jpg"width={1300} height={700} alt="First slide" />
        </div>

    
      </Carousel.Item>
      <Carousel.Item>
      <div style={{display:'flex',justifyContent:'center'}} >
        <img src="/images/naturepic2.jpg" width={1300} height={700} alt="First slide" />
        </div>
      </Carousel.Item>
    </Carousel>
      
    </div>
    </>
  )
}

export default Slider
