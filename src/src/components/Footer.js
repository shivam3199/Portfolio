import React from 'react';
function Footer() {
    return (
        <footer className='Main-footer'>
            <div class="Footer-Container">
                <div class="row">
                    <div class="col w-25">
                        <h6> <img src="./uploads/logo.png" />
                            <small>Persistent systems</small></h6>
                    </div>
                    <div class="col w-25">
                        <small>Developed by TExT unit @ core_text_team@persistent.com</small>
                    </div>
                    <div class="col w-25">
                        <small>PRIVACY NOTICE</small>
                    </div>
                    <div class="col w-25">
                        <small>TERMS OF USE</small>
                    </div>
                    <div class="col w-25 last-column">
                        <small>&copy;{new Date().getFullYear()}Persistent systems</small>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
