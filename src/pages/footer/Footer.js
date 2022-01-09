import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-main">
                <div className="footer-left">
                    <ul className='ul-footer'>
                        <li>
                            <a href="">About Us</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">Our course</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-center">
                    <ul className='ul2-footer'>
                        <li>
                            <a href="">Contacts</a>
                        </li>
                        <li>
                            <a href=""><FontAwesomeIcon icon={faPhone} /> +374 77 84 08 80</a>
                        </li>
                        <li>
                            <a href=""><FontAwesomeIcon icon={faEnvelope} /> info@it-g.am</a>
                        </li>
                        <li>
                            <a href=""><FontAwesomeIcon icon={faMapMarkerAlt} /> Yerevan, Hakob Hakobyan Street, 3</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-right">
                    <p>Links</p>
                    <div className="icons">
                        <img src="images/fb.png" />
                        <img src="images/insta.png" />
                        <img src="images/tiktok.png" />
                        <img src="images/linkedin.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}