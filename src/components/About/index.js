import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faCss3, faHtml5, faReact, faGitAlt, faJsSquare,} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import cpplogo from '../../assets/images/C++_Logo.png'

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
                    Hey! I'm Muneeb and I am a Software Engineering student at the University of Waterloo. I began software development 3 years ago and have a wealth of experience and knowledge to offer. I am always looking for new challenges and opportunities to grow, and am constantly seeking to improve my skills and knowledge.
                </p>
                <p>
                    I am a team player and have excellent communication skills, which have helped me to build strong relationships with my colleagues and clients. I am also highly organized and able to work well under pressure, which has helped me to deliver projects on time and to a high standard.
                </p>
                <p>
                    Outside of school, I enjoy sports, both watching and playing. I am an avid Toronto Raptors and Toronto Blue Jays fan and enjoy playing basketball in my spare time. 
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
                        <img src={cpplogo} alt="C++ Logo" /> 
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