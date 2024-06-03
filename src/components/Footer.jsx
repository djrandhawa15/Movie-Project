import React from 'react';
import { getYear } from '../utilities/dates';
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      
        <p>&copy; <span>{getYear()} For Educational Purposes only.</span></p>
    </div>
  )
}

export default Footer