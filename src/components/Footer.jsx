import EmailSubscriptionForm from './EmailSubscribe';
import { IoIosPhonePortrait } from 'react-icons/io';
import { FaRegClock } from 'react-icons/fa';
import { RiCalendarCloseLine } from 'react-icons/ri';

import '../styles/Footer.scss';

function Footer() {
  return (
    <footer className='footer' style={{ color: '#fff' }}>
      <div className='footer-content'>
        <div className='footer-column'>
          <h4 className='footer-title'>Establishment</h4>
          <ul className='footer-links'>
            <li>About Us</li>
            <li>Find Locations</li>
          </ul>
        </div>
        <div className='footer-column'>
          <h4 className='footer-title'>Brand</h4>
          <ul className='footer-links'>
            <li>Press</li>
            <li>Blog</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className='footer-column'>
          <h4 className='footer-title'>Support</h4>
          <ul className='footer-links'>
            <li>Shipping/Return Policy</li>
            <li>Repairs</li>
            <li>Warranty</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='footer-column'>
          <h4 className='footer-title'>Contact Us</h4>
          <ul className='footer-links'>
            <li>
              <IoIosPhonePortrait className='icon' />
              1-800-555-5555
            </li>
            <li>
              <FaRegClock className='icon' /> 9am-5pm PST, M-F
            </li>
            <li>
              <FaRegClock className='icon' /> 9am-1pm PST, Sat
            </li>
            <li>
              <RiCalendarCloseLine className='icon' />
              Closed Sundays
            </li>
          </ul>
        </div>
        <EmailSubscriptionForm />
      </div>
      <div className='footer-bottom'>
        <p>
          © {new Date().getFullYear()} Angel Rodriguez. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
