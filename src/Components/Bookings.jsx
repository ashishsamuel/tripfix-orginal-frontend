import React, { useContext, useState } from 'react'
import './Bookings.css'
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap'

function Bookings() {
  return (
    <div className='booking'>
      <div className="booking_top d-flex align-items-center justify-content-between">
        <h3>100<span>/per person</span></h3>
        <span className="tour_rating d-flex align-items-center">
              <i class="fa-solid fa-star text-warning"></i>
              </span>
      </div>


      {/* booking form */}
      <div className="booking_form">
        <h5>Information</h5>
        <Form className='booking_info-form'>
            <FormGroup className='mb-2'>
                <input type="text" placeholder='Full Name' id='fullName' required/>
            </FormGroup>
            <FormGroup className='mb-2'>
                <input type="number" placeholder='Phone' id='phone' required/>
            </FormGroup>
            <FormGroup className='d-flex align-items-center mb-2'>
                <input type="date" placeholder='' id='bookAt' required/>
                <input type="number" className='ms-2' placeholder='Guest' id='guestSize' required/>
            </FormGroup>
        </Form>
      </div>

      {/* booking bottom */}
      <div className="booking_bottom">
        <ListGroup>
            <ListGroupItem className='border-0 px-0 d-flex align-items-center justify-content-between'>
               <h6 className='d-flex align-items-center gap-1'>100 <i class="fa-solid fa-xmark"></i> 1 person</h6>
               <span>$100</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 d-flex align-items-center justify-content-between'>
               <h6>Service charge</h6>
               <span>$10</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total d-flex align-items-center justify-content-between'>
               <h6>Total</h6>
               <span>$1500</span>
            </ListGroupItem>
        </ListGroup>
        <Button className='btn btn-warning w-100 mt-4'>Book Now</Button>
      </div>
    </div>
  )
}

export default Bookings
