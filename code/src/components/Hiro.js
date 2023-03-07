import {useState} from 'react'

import profile from '../assets/profile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import {  faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'

export default function Hiro () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative container" style={{position:'relative'}}>
            <div className='md:w-3/6 md:p-4' style={{position:'absolute', top:100, left:0}}>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"  src={"/img/intro.png"} alt="profile" onLoad={() => setLoaded(false)} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="400" style={{position:'absolute', bottom:200, right:0}}>
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-white-400">Hi, I'm</h1>
                    <h1 className="text-2xl font-bold">Noman Nasir Minhas</h1>
                    <p class="text-xl font-bold text-gray-300">Full Stack Blockchain Developer</p>
                    <p className="text-md font-bold text-white-400 ">Code like a ninja, debug like a pirate, and deploy like a pro. Welcome to my portfolio, where the only bugs you'll find are in the code.</p>
                </div>
                {/* <a href='https://www.github.com/NomanNasirMinhas' className='mt-2 block'>See My Github <FontAwesomeIcon className='ml-2' icon={faCircleArrowRight}/> </a> */}
                
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://github.com/NomanNasirMinhas' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://instagram.com/_.minhas._' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/noman-nasir-minhas/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
        </>
    )
}
