import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 

function Footer() {

    return (
        <footer>
            <ul class="social-list">
            <li class="social-list__item">
                 <a class="social-list__link" href="https://github.com/reza-mahmoudian">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
             
         </ul>
        </footer>
    );
}

export default Footer;