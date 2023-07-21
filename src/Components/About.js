import React from 'react';
import { useState } from "react";
import OurJourney from './AboutUs/OurJourney';
import Partners from './AboutUs/Partners';
import ContactUs from './AboutUs/ContactUs';

function About(props) {

    const [ section1, setSection1 ] = useState("show");
    const [ section2, setSection2 ] = useState("");
    const [ section3, setSection3 ] = useState("");

    const toggleSection1 = () => {
        setSection1("show");
        setSection2("");
        setSection3("");
    }

    const toggleSection2 = () => {
        setSection1("");
        setSection2("show");
        setSection3("");
    }

    const toggleSection3 = () => {
        setSection1("");
        setSection2("");
        setSection3("show");
    }

    const navigateStyle = {
        width: "18rem",
        maxHeight: "165px",
        backgroundColor: (props.mode === 'light') ? 'white' : '#272630',
        color: (props.mode === 'light') ? 'black' : 'white'
    }

    let modeColor = {
        backgroundColor: (props.mode === 'light') ? 'white' : '#6c757d',
        color: (props.mode === 'light') ? 'black' : 'white'
    }


  return (
    <>
    <div className='container my-4 d-flex pt-4'>
        <div className="card me-2" style={navigateStyle}>
            <div className="card-header">
                Featured
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" type="button" onClick={toggleSection1} style={modeColor}>Our Journey</li>
                <li className="list-group-item" type="button" onClick={toggleSection2} style={modeColor}>Our Partners</li>
                <li className="list-group-item" type="button" onClick={toggleSection3} style={modeColor}>Contact Us</li>
            </ul>
        </div>
            <div>
                <div className={`collapse ${section1}`} style={{width:'65vw'}}>
                    <OurJourney mode={props.mode}/>
                </div>
            </div>
            <div>
                <div className={`collapse ${section2}`} style={{width:'65vw'}}>
                    <Partners mode={props.mode}/>
                </div>
            </div>
            <div>
                <div className={`collapse ${section3}`} style={{width:'65vw'}}>
                    <ContactUs mode={props.mode}/>
                </div>
            </div>
    </div>
    </>
  );
}

export default About;
