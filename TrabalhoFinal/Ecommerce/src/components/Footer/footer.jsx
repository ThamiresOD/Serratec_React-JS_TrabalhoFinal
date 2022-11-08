import { FaFacebook, FaInstagram } from 'react-icons/fa'
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
    <MDBFooter bgColor='dark' color='white' className='text-center footer'>
      <MDBContainer>
        <MDBRow>
          <MDBCol lg='4'>
            <h5 className='text mb-1'>Aquarium Ltda.</h5>
            <ul className='list-unstyled'>
              <li>+55-21-2742-0055</li>
              <li>Teresópolis, RJ</li>
            </ul>
          </MDBCol>
          <MDBCol lg='4' className='mb-4 mb-md-0'>
            <h5 className='text mb-1'>Redes Sociais</h5>
            <ul className='list-unstyled'>
              <li><FaFacebook /> @aquarium</li>
              <li><FaInstagram /> @aquarium</li>
            </ul>
          </MDBCol>
          <MDBCol lg='4' className='mb-4 mb-md-0'>
            <h5 className='text mb-1'>Fale Conosco</h5>
            <ul className='list-unstyled'>
              <li>
                <h6 className='text-light'>aquarium@email.com</h6>
              </li>
              <li>
                <h6 className='text-light'>(22) 9 9365-9542</h6>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
