import './index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        // ORIGINAL LINE
        // return setTimeout(() => {
        // setLetterClass('text-animate-hover')
        // }, 4000);
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);     
    },[])

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
                        <form>
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