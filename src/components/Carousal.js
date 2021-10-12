import React from 'react'
import { Carousel } from 'react-bootstrap'
import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

export const CarousalView = () => {
  return (
    <Carousel prevLabel={null} nextLabel={null}>
		  <Carousel.Item>
		    <img
		      style={{height: "400px"}}
		      className="d-block w-100 "
		      src={image1}
		      alt="First slide"
		    />
		    <Carousel.Caption>
		      <h3>First slide label</h3>
		      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      style={{height: "400px"}}
		      className="d-block w-100"
		      src={image2}
		      alt="Second slide"
		    />
		    <Carousel.Caption>
		      <h3>Second slide label</h3>
		      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      style={{height: "400px"}}
		      className="d-block w-100"
		      src={image3}
		      alt="Third slide"
		    />
		    <Carousel.Caption>
		      <h3>Third slide label</h3>
		      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		</Carousel>
  )
}