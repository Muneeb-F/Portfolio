import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState} from 'react'

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
            
        </div>
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