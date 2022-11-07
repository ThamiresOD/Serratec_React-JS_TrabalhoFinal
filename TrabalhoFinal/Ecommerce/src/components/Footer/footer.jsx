import  {FaFacebook, FaInstagram} from 'react-icons/fa'
import "./style.css";
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';



const Footer = () => {
  return (

    <MDBFooter bgColor='dark' color='white' className='text-center'>
    <MDBContainer className='p-2'>
      <MDBRow>
      <MDBCol lg='5' md='6' className='mb-4 mb-md-0'>
            <h5 className='text mb-1'>Aquarium Ltda.</h5>
              <ul className='list-unstyled mb-0'>
                    <li>+55-21-2742-0055</li>
                    <li>Teresópolis, RJ</li>
                  </ul>
     </MDBCol>
     <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text mb-1'>Redes Sociais</h5>
            <ul className='list-unstyled'>
                  <li><FaFacebook/> @aquarium</li>
                  <li><FaInstagram/> @aquarium</li>

                </ul>
      </MDBCol>
      <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
          <h5 className='text mb-1'>Links</h5>

                <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-light'>
                  Link 1
                </a>
              </li>
              <li>
                <a href='#!' className='text-light'>
                  Link 2
                </a>
              </li>

              <li>
                <a href='#!' className='text-dark'>
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol>
          </MDBRow>

          </MDBContainer>
                <div className='text-center p-0' style={{ backgroundColor: 'rgba(33, 37, 41)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' Aquarium Ltda. '}

      </div>
    </MDBFooter>
       );
};

export default Footer;
