import React from 'react'
import { SocialData } from '../../Data/social';
import './socialContact.css';

function SocialContact() {
    const data = SocialData;
    return (
        <div className='Social-contact'>
            {data.map((item) => {
                return (
                    <a href={item.link}>
                        <div className='social-icon-div'>
                            <img src={item.icon} alt='' className='social-media' />
                        </div>
                    </a>
                );
            })}
        </div>
    )
}

export default SocialContact