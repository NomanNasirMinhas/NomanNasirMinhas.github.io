import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import bash from "../assets/skills/bash.svg"
import nodejs from "../assets/skills/nodejs.svg"
import rust from "../assets/skills/rust.svg"
import python from "../assets/skills/python.svg"
import reactIcon from "../assets/skills/react.svg"
import tailwind from "../assets/skills/tailwind.svg"
// import react from "../assets/skills/react.svg"
// import express from "../assets/skills/express1.svg"
import java from "../assets/skills/java.svg"
import cpp from "../assets/skills/cpp.svg"
import assembly from "../assets/skills/assembly.svg"
import flutter from "../assets/skills/flutter.svg"
import blender from "../assets/skills/blender.svg"
import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import gitlab from "../assets/skills/gitlab.svg"

import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="Rust" experience="3 years" img={rust} />
                <SkillCard name="Bash" experience="2 years" img={bash} />
                <SkillCard name="Python" experience="2 years" img={python} />
                <SkillCard name="Javascript" experience="4 years" img={javascript} />
                <SkillCard name="React" experience="4 years" img={reactIcon} />
                <SkillCard name="Tailwind" experience="1 year" img={tailwind} />
                <SkillCard name="NodeJS" experience="4 years" img={nodejs} />
                <SkillCard name="Express" experience="3 years" img={express} />
                <SkillCard name="Java" experience="2 years" img={java} />
                <SkillCard name="C++" experience="1 year" img={cpp} />
                <SkillCard name="Assembly" experience="2 years" img={assembly} />
                <SkillCard name="Flutter" experience="2 years" img={flutter} />
                <SkillCard name="React Native" experience="2 years" img={reactIcon} />
                <SkillCard name="Docker" experience="1 year" img={docker} />
                <SkillCard name="Git" experience="4 year" img={git} />
                <SkillCard name="Blender" experience="1 year" img={blender} />
                <SkillCard name="MongoDB" experience="3 years" img={gitlab} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}