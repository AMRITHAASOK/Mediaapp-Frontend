import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div> <MDBNavbar light bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-primary fw-bolder fs-4'>
          <i class="fa-solid fa-cloud-arrow-up fa-fade m-2 text-primary"></i>
           Media Player
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar></div>
  )
}

export default Header