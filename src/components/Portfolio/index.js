import React from "react"
import "./index.scss"
import Loader from "react-loaders"
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState} from 'react'



const Portfolio = () => {
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
        <div className="container portfolio-page">
            <h1 className="page-title">
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['P','o','r','t','f', 'o', 'l', 'i','o']}
                        idx={15}
                    />
                </h1>
        </div>
        <Loader type="pacman"/>

        </>
    );
}
 
export default Portfolio;