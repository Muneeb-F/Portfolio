import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faCss3, faHtml5, faReact, faGitAlt, faJsSquare,} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { faC } from '@fortawesome/free-solid-svg-icons'

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
         <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Hey, I am a Software Engineering student at the UNiversity of Waterloo. I havr enjoyed software developement since grade 10 and I recently have delved further into frontend developement. 
                </p>
                <p>
                    Outside of school, I enjoy sports, both watching and playing. I am an avid Toronto Raptors and Toronto Blue Jays fan and enjoy playing basketball in my spare time. 
                </p>
                <p>
                    
                </p>
            
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color='#EFD81D' />
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
                        <FontAwesomeIcon icon={faC} color='#27285C' /> 
                    </div>


                </div>

            </div>
        </div>
        <Loader type="pacman" />
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