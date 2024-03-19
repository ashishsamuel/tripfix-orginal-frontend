import React from 'react'
import './FeaturedTours.css'
import { Col } from 'react-bootstrap'

function FeaturedTours() {
  return (
    <Col lg={3} md={6} className='mb-4'>
        <TourCard/>
    </Col>
  )
}

export default FeaturedTours
