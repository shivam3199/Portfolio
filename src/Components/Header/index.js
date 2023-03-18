import React, { useState } from 'react'
import './header.css'
import Mobile from './Mobile'
import Web from './Web'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='header'>
            <a className="logo" href="/" >
                SHIVAM RASKONDA</a>
            <div className='menu'>
                <div className='web-menu'><Web /></div>
                <div className='mobile-menu'>
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <i class="fi fi-rr-apps menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
    )
}

export default Header