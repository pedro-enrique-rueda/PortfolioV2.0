import React, {useDebugValue, useEffect, useState} from 'react'
import './Contact.scss';
import gmail from './Icons/gmail.svg';
import github from './Icons/github.svg';
import linkedin from './Icons/linkedin.svg';
import axios from 'axios';


function Contact() {
    const [email, setEmail] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001').then( response =>{
            setEmail(response.data[0].myemail);
        });
    },[]);

    const mail = "mailto:"+email; 

    return (
        <React.Fragment>
            <div className="contact" id="contact">
                <div id="one" title="GitHub">
                    <img src={github} alt="/" />
                </div>
                <div title="LinkedIn">
                    <img src={linkedin} alt="/" />
                </div>
                <div title="Gmail">
                    {/* <a href={mail}> */}
                    <a href="mailto: pedrorueda9009@gmail.com">
                        <img src={gmail} alt="" />
                    </a>       
                </div>
            </div>
                <p id="rigths">
                 Physicist and Developer. &copy;2021 All rights reserved
                 </p>

        </React.Fragment>
        
    )
}

export default Contact
