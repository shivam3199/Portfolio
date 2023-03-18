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
                    <br /> I love experimenting with the web

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