import React from 'react'
import Seperator from '../../Common/separator';
import SocialContact from '../../Common/socialContact';
import './contact.css';


function Contact() {
    return (
        <div className='contact'>
            <Seperator />
            <label className='section-title'>Contact</label>
            <div className='contact-container'>
                <div className='contact-left'>
                    <p>Want to get in touch? contact me on any of the platforms</p>
                    <SocialContact />
                </div>
                <div className='download'>
                    <a href={require('../../../Assets/resume.pdf')}>
                        <i class='fi-rr-cloud-download download-icon' />Download resume
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Contact