import CertCard from "./CertCard.js"

//Coursera
import AC from "../assets/certs/Coursera/AC.jpg"
import APSFC from "../assets/certs/Coursera/APSFC.jpg"
import BigData from "../assets/certs/Coursera/BigData.jpg"
import CF from "../assets/certs/Coursera/CF.jpg"
import DTF from "../assets/certs/Coursera/DTF.jpg"
import GIS from "../assets/certs/Coursera/GIS.jpg"
import IBMCA from "../assets/certs/Coursera/IBMCA.jpg"
import IBMDevops from "../assets/certs/Coursera/IBMDevops.jpg"
import IBMZOS from "../assets/certs/Coursera/IBMZOS.jpg"
import IDSE from "../assets/certs/Coursera/IDSE.jpg"
import IFFC from "../assets/certs/Coursera/IFFC.jpg"
import PFC from "../assets/certs/Coursera/PFC.jpg"
import SAF from "../assets/certs/Coursera/SAF.jpg"

import CHF from "../assets/certs/Cybrary/CHF.jpg"
import Cryp from "../assets/certs/Cybrary/Cryp.jpg"
import IMARE from "../assets/certs/Cybrary/IMARE.jpg"
import IRAF from "../assets/certs/Cybrary/IRAF.jpg"
import PSP from "../assets/certs/Cybrary/PSP.jpg"
import PTEH from "../assets/certs/Cybrary/PTEH.jpg"

import auto from "../assets/certs/Security/auto.jpg"
import ieee from "../assets/certs/Security/ieee.jpg"

import DS from "../assets/certs/Udacity/DS.jpg"
import BCC from "../assets/certs/Udacity/BCC.jpg"
import CV from "../assets/certs/Udacity/CV.jpg"
import DE from "../assets/certs/Udacity/DE.jpg"
import DR from "../assets/certs/Udacity/DR.jpg"
import NLP from "../assets/certs/Udacity/NLP.jpg"

import rust from "../assets/certs/Udemy/rust.jpg"
import git from "../assets/certs/Udemy/git.jpg"
import python from "../assets/certs/Udemy/python.jpg"
import dart from "../assets/certs/Udemy/dart.jpg"

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            
            <div style={{height: '50px'}}></div>
            <h1 className="font-bold text-xl">Cyber Security</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Applied Cryptography Specialization" img={AC} issued="Coursera" />
                <CertCard name="Advanced Python Scripting for Cybersecurity" img={APSFC} issued="Coursera" />
                <CertCard name="Computer Forensics" img={CF} issued="Coursera" />
                <CertCard name="IBM Cybersecurity Analyst" img={IBMCA} issued="Coursera" />
                <CertCard name="Google IT Support" img={GIS} issued="Coursera" />
                <CertCard name="IT Fundamentals for Cybersecurity" img={IFFC} issued="Coursera" />
                <CertCard name="Python for Cybersecurity" img={PFC} issued="Coursera" />
                <CertCard name="Security Analyst Fundamentals" img={SAF} issued="Coursera" />
                <CertCard name="Computer Hacking and Forensics" img={CHF} issued="Cybrary" />
                <CertCard name="Crypto" img={Cryp} issued="Cybrary" />
                <CertCard name="Intro to Malware Analysis and Reverse Engineering" img={IMARE} issued="Cybrary" />
                <CertCard name="Incident Response and Advanced Forensics" img={IRAF} issued="Cybrary" />
                <CertCard name="Python for Security Professionals" img={PSP} issued="Cybrary" />
                <CertCard name="Penetration Testing and Ethical Hacking" img={PTEH} issued="Cybrary" />
                <CertCard name="Autopsy 8-Hour Online Training" img={auto} issued="Autopsy" />
                <CertCard name="Python & Ethical Hacking From Scratch" img={python} issued="Udemy" />
            </div>

            <div style={{height: '50px'}}></div>
            <h1 className="font-bold text-xl">Artificial Intelligence</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="DeepLearning.AI TensorFlow Developer" img={DTF} issued="Coursera" />
                <CertCard name="Big Data Certificate" img={BigData} issued="Dice Analytics" />
                <CertCard name="Computer Vision Nanodegree" img={CV} issued="Udacity" />
                <CertCard name="Data Engineering Nanodegree" img={DE} issued="Udacity" />
                <CertCard name="Deep Reinforcement Learning Nanodegree" img={DR} issued="Udacity" />
                <CertCard name="Data Science Nanodegree" img={DS} issued="Udacity" />
                <CertCard name="Natural Langugae Processing Nanodegree" img={NLP} issued="Udacity" />
            </div>

            <div style={{height: '50px'}}></div>
            <h1 className="font-bold text-xl">Programming and DevOps</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="IBM Applied DevOps Engineering" img={IBMDevops} issued="Coursera" />
                <CertCard name="IBM z/OS Mainframe Practitioner" img={IBMZOS} issued="Coursera" />
                <CertCard name="IBM DevOps and Software Engineering" img={IDSE} issued="Coursera" />
                <CertCard name="Dart - Advanced Course" img={dart} issued="Udemy" />
                <CertCard name="Git from Basics to Advanced" img={git} issued="Udemy" />
                <CertCard name="Rust for Beginners" img={rust} issued="Udemy" />
            </div>

            <div style={{height: '50px'}}></div>
            <h1 className="font-bold text-xl">Blockchain</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Enterprise Blockchain for Internet of Things" img={ieee} issued="IEEE" />
                <CertCard name="Blockchain Developer" img={BCC} issued="Udacity" />
            </div>
            {/* <img src={hr} className="w-full mt-8 md:h-2" alt="hr" /> */}
        </div>
    )
}
