import React from 'react'
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the Adventure newsletter to recieve our best vacation deals!
            </p>
            
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your Email' className='footer-input' 
                    />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
            <p className='footer-subscription-text'>
                You can Unsubscribe at any time
            </p>
        </section>
        <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/sign-up'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        </div>
      
    </div>
  )
}

export default Footer
