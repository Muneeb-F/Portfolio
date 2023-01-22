import './index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
// import { EmailJSResponseStatus } from '@emailjs/browser';
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();


    useEffect(() => {
        // ORIGINAL LINE
        // return setTimeout(() => {
        // setLetterClass('text-animate-hover')
        // }, 4000);
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);     
    },[])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                "service_kmix80r",
                "template_6jew7qg",
                refForm.current,
                "kKVpV-SYlGdapK5J5"
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return ( 
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n','t','a','c','t', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in Frontend or Full Stack developement opportunities in Toronto this upcoming Summer 2023. If you have any questions or would like to know more, please don't hesitate to reach out!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li>
                                    <input type='text' name="name" placeholder='Name' required />
                                </li>
                                <li>
                                    <input type='text' name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />    
                                </li>

                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}
 
export default Contact;


/* <div className='socials'>   
            <a
            target="blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/muneeb-farrukh-84a9b71b2/"
            >
                <FontAwesomeIcon icon={faLinkedin} color="#fff" />
            </a>
            <a
            target="blank"
            rel="noreferrer"
            href="https://github.com/Muneeb-F"
            >
                <FontAwesomeIcon icon={faGithub} color="#fff" />
            </a>
        </div> */