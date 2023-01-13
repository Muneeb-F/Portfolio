import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faHtml5, faReact, faGitAlt, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react'

const About = () => {
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
         <div className="about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello 
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello 
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello 
                </p>
                <p>
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello 
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello 
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello 
                </p>
                <p>
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello 
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello 
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello 
                </p>
            
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>


                </div>

            </div>
        </div>
        {/* <Loader type="line-scale-pulse-out" /> */}
        </>
    )
}

// import './index.scss'

// const About = () => {
//     return (
//         <div className='about-page'>
//             <div className='text-zone'>
//                 <h1>YOOOOO</h1>
//             </div> 
//         </div>
//     )
// }

export default About