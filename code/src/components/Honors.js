import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Work Experience</h1>
            {/* <p className="font-light text-gray-400">Here are some of my honors and awards</p> */}

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Software Engineer" issued="TangleHub, Netherlands" date="Feb 2021 - Present" desc="Rust Development, Full Stack(MERN) Development, Solidity Development, API (FastAPI, Express.JS) Development" />
                <HonorCard name="Software Engineer" issued="Marblelous, Netherlands" date="March 2021 - March 2022" desc="ESP32 Mobile Application Development in Flutter, Simulation Game Development in Construct3" />
                <HonorCard name="Web Developer" issued="DF Technologies, Islamabad" date="Nov 2020 - Feb 2021" desc="AWS S3 API(NodeJS) Development, React Developer, AWS Services Management" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
