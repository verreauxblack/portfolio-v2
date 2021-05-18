/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagramSquare, faCodepen, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer class="bg-darkBlue text-white h-36 flex justify-evenly items-center flex-col">
            <div class="social-media flex space-x-2 text-xl">
            <a class="hover:text-sandle" href="https://twitter.com/verreauxblack" target="_blank" title="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a class="hover:text-sandle" href="https://instagram.com/_verreauxblack" target="_blank" title="Instagram"><FontAwesomeIcon icon={faInstagramSquare} /></a>
            <a class="hover:text-sandle" href="https://codepen.io/verreauxblack" target="_blank" title="Codepen"><FontAwesomeIcon icon={faCodepen} /></a>
            <a class="hover:text-sandle" href="https://telegram.me/verreauxblack" target="_blank" title="Telegram"><FontAwesomeIcon icon={faTelegram} />
            </a>
            <a class="hover:text-sandle" href="https://github.com/verreauxblack" target="_blank" title="Github"><FontAwesomeIcon icon={faGithub} />
            </a>
        
            {/* <a href="mailto:verreauxblack@outlook.com"><img src="/pic/social media/outlook.png" alt="outlook" class="image" title="Outlook" /></a>
            <a href="mailto:verreauxblack@gmail.com"><img src="/pic/social media/gmail.png" alt="gmail" class="image" title="Gmail" /></a> */}
          </div>
          <div class="text-center">
            <h3>@2021 Designed and Developed</h3>
            <h1>by <strong class="hover:text-sandle">RAJKUMAR</strong></h1>
          </div>
        </footer>
    )
}

export default Footer
