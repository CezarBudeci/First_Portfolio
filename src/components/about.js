import React from "react";
import ProfilePhoto from '../images/Photo_CBudeci_Cropped.jpg';
import SkillIcon from "./skillicons";
import { skills } from "../data/constants";

function About() {

    return (
        <div className = "about-wrapper">
            <div className = "about-box1">
                <p><span className = "about-box1-span">who<br /></span>i am ...</p>
            </div>
            <div className = "about-box2">
                <img alt = "Profile" src = {ProfilePhoto} className = "about-box2-image" />
            </div>
            <div className = "about-box3">
                <p className = "about-box3-text">
                I am a second year student at HAMK. I am looking forward to becoming a Software Developer or Software Engineer. In my free time I enjoy upgrading my coding skills and playing video games. I am also a quick learner, persevering and creative person, willing to discover new things everyday.
                </p>
            </div>
            <div className = "about-box4"></div>
            <div className = "about-box5">
                <p className = "about-box5-title">advanced skills</p>
                {/* <p className = "about-box5-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget eleifend lectus. Aenean ultrices lorem velit. Aliquam viverra ligula ut cursus tempor.
                </p> */}
                <div className = "about-box5-skills-wrapper">
                    {skills[0].map(item => <SkillIcon key = {item.tech} tech = {item.tech} icon = {item.icon} class = {item.class} />)}
                </div>
            </div>
            <div className = "about-box6">
                <p className = "about-box6-title">intermediate skills</p>
                {/* <p className = "about-box6-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget eleifend lectus. Aenean ultrices lorem velit. Aliquam viverra ligula ut cursus tempor.
                </p> */}
                {/* <div className = "about-box6-wrapper-wrapper"> */}
                    <div className = "about-box6-skills-wrapper">
                        {skills[1].map(item => <SkillIcon key = {item.tech} tech = {item.tech} icon = {item.icon} class = {item.class}  />)}
                    </div>
                {/* </div> */}
            </div>
            <div className = "about-box7">
                <p className = "about-box7-title">basic skills</p>
                {/* <p className = "about-box7-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget eleifend lectus. Aenean ultrices lorem velit. Aliquam viverra ligula ut cursus tempor.
                </p> */}
                <div className = "about-box7-skills-wrapper">
                    {skills[2].map(item => <SkillIcon key = {item.tech} tech = {item.tech} icon = {item.icon} class = {item.class}  />)}
                </div>
            </div>
        </div>
    );
}

export default About;