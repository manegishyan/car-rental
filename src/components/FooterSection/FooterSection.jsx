import './FooterSection.css'

import footerLogo from '../../assets/images/logo/footerLogo.svg';

import location from '../../assets/images/footer/location.svg';
import call from '../../assets/images/footer/call.svg';
import sms from '../../assets/images/footer/sms.svg';

import facebookIcon from '../../assets/images/footer/facebook.svg'
import instagramIcon from '../../assets/images/footer/instagram.svg'
import youtubeIcon from '../../assets/images/footer/youtube.svg'

export const FooterSection = () => {
  return (
    <footer className='footer-section'>
        <div className="footer__container">

            <div className="footer-content">

                <div className="footer-col footer-info">
                    <div className="footer-logo">
                        <img src={footerLogo} alt="logo" />
                    </div>

                <ul className='footer-contact-list'>
                    <li>
                        <img src={location} alt="Location" />
                        <span>25566 Hc 1, Glenallen,<br />Alaska, 99588, USA</span>
                    </li>
                    <li>
                        <img src={call} alt="Phone" />
                        <span>+603 4784 273 12</span>
                    </li>
                    <li>
                        <img src={sms} alt="Mail" />
                        <span>rentcars@gmail.com</span>
                    </li>
                </ul>
               </div>
            
               <div className="footer-col">
                   <h4 className="footer-title">Our Product</h4>
                   <ul className="footer-links">
                       <li><a href="#">Career</a></li>
                       <li><a href="#">Car</a></li>
                       <li><a href="#">Packages</a></li>
                       <li><a href="#">Features</a></li>
                       <li><a href="#">Priceline</a></li>
                   </ul>
               </div>
   
               <div className="footer-col">
                   <h4 className="footer-title">Resources</h4>
                   <ul className="footer-links">
                       <li><a href="#">Download</a></li>
                       <li><a href="#">Help Centre</a></li>
                       <li><a href="#">Guides</a></li>
                       <li><a href="#">Partner Network</a></li>
                       <li><a href="#">Cruises</a></li>
                       <li><a href="#">Developer</a></li>
                   </ul>
               </div>
   
               <div className="footer-col">
                   <h4 className="footer-title">About Rentcars</h4>
                   <ul className="footer-links">
                       <li><a href="#">Why choose us</a></li>
                       <li><a href="#">Our Story</a></li>
                       <li><a href="#">Investor Relations</a></li>
                       <li><a href="#">Press Center</a></li>
                       <li><a href="#">Advertise</a></li>
                   </ul>
               </div>
   
               <div className="footer-col">
                   <h4 className="footer-title">Follow Us</h4>
                   <div className="footer-socials">
                       <a href="#" aria-label="Facebook">
                           <img src={facebookIcon} alt="Facebook" />
                       </a>
                       <a href="#" aria-label="Instagram">
                           <img src={instagramIcon} alt="Instagram" />
                       </a>
                       <a href="#" aria-label="YouTube">
                          <img src={youtubeIcon} alt="YouTube" />
                       </a>
                   </div>
               </div>
               </div>
   
               <div className="footer-bottom">
                   <p>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
               </div>

        </div>
    </footer>
  )
}
