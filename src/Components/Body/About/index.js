import React from 'react'
import SocialContact from '../../Common/socialContact';
import './about.css';

function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    Hello There👋🏻, I am <br />
                    <span className='my-name'>Shivam Raskonda.</span>
                    <br /> 
                    <br /> 

                    A budding enthusiastic Web
                    developer, passionate about
                    JavaScript Development
                    Offering expertise in Front-end
                    development with experience of
                    up to 2 years. Seeking to
                    advance a growing tech career
                    as a Software Development in a
                    competitive environment

                </div>
                <div className='about-image'>
                    <img src={require('../../../Assets/Programming-Shivam.png')} alt='' className='picture' />

                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About