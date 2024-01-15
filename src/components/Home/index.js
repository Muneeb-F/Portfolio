import { useEffect, useState,  } from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/logo-m.png'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['u','n','e','e','b',',']
    const jobArray = ['S','o','f','t', 'w','a','r','e', ' ','E','n','g','i','n','e','e','r','.',]

    useEffect(() => {
        // ORIGINAL LINE
        // return setTimeout(() => {
        // setLetterClass('text-animate-hover')
        // }, 4000);
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);     
    },[])

   
   

    return (
        <>
        <div className="home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>                  
                    <br />
                    <span className={`${letterClass} _13`}>I</span>                  
                    <span className={`${letterClass} _14`}>'m</span>                  
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={20}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={15}/>
                    </h1>
                    <h2> Software Engineer / AI + ML Enthusiast </h2>
                    <a href="https://drive.google.com/file/d/1DlFITdznhc9nSAs13_oHR3QfKkzdiOjE/view?usp=sharing" className='flat-button' target="_blank" rel="noopener noreferrer">RESUME</a>
                    <Link to="/contact" className='contact-button'>CONTACT ME</Link>
                    
                    
                </div>
                <Logo/>          
            </div>
        <Loader type="pacman" />
        </>
        );
}
 
export default Home;
