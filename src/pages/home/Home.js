import { useRef, useState } from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faBars, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Home({gotoDown, goToAbout, goToCourses}) {

    const [showContacts, setShowContacts] = useState(false);
    const [burger, setBurger] = useState(false);

    return (
        <div className="home">
            
            <img className="back" src="/images/back.png" />

            <button className="burger" onClick={() => {
                setBurger(!burger);
            }}><FontAwesomeIcon icon={faBars} /></button>

            <div className="burger-menu" style={burger ? {display : "block"} : {display : "none"}}>
            <ul>
                        <li>
                            <button>Services</button>
                        </li>
                        <li>
                            <button>About us</button>
                        </li>
                        <li>
                            <button>Courses</button>
                        </li>
                        <li>
                            <button onClick={() => {
                                setShowContacts(!showContacts);
                            }}>Contacts</button>
                        </li>
                        <li>
                            <button onClick={() => {
                                setBurger(!burger);
                            }}>X</button>
                        </li>
                    </ul>
            </div>

            <nav>
                <div className="nav">
                    <ul className='ul'>
                        <li>
                            <button onClick={gotoDown}>Services</button>
                        </li>
                        <li>
                            <button onClick={goToAbout}>About us</button>
                        </li>
                        <li>
                            <button onClick={goToCourses}>Courses</button>
                        </li>
                        <li>
                            <button onClick={() => {
                                setShowContacts(!showContacts);
                            }}>Contacts</button>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="center-contacts" style={showContacts ? {display : "block"} : {display : "none"}}>
                <div className="show-contacts" >
                    <h1>CONTACTS</h1>
                    <button className="close-con" onClick={() => {
                        setShowContacts(!showContacts)
                    }}>X</button>

                    <ul className='ul-home'>
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

                    <div className="icons-home">
                        <img src="images/fb.png" />
                        <img src="images/insta.png" />
                        <img src="images/tiktok.png" />
                        <img src="images/linkedin.png" />
                    </div>

                </div>
            </div>

            <div className="dots-r-div">
                <img className="dots-r" src="/images/dots-r.png" />
            </div>
            <img className="dots-top" src="/images/dots-r.png" />
            <img className="left-dash" src="/images/left-dash.png" />
            <img className="left-up-dash" src="/images/left-up-dash.png" />
            <img className="dots-small" src="/images/dots-small.png" />
            <img className="right-dash" src="/images/right-dash.png" />
            <div className="center">
                <img className="macbook" src="/images/macbook.png" />
            </div>
            <img className="logo" src="/images/logo.png" />
            
            <p className="home-title">We Provide Best Services Ever</p>
            <button className="explore-btn">Explore</button><br />
            <button className='down' onClick={gotoDown}>Down</button>
        </div>
    )
}