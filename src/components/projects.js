import React from "react";
import codingImg from '../images/coding.jpg';
import { Icon } from '@iconify/react';

function Projects() {

    return (
        <div className = "projects-wrapper">
            <div className = "box1">
                <p><span className = "box1-span">what<br /></span>i do ...</p>
            </div>
            <div className = "box2"></div>
            <div className = "box3">
                <img className = "box3-image" alt = "Coding" src = {codingImg}/>
                <p className = "box3-title">Voting Machine</p>
                <p className = "box3-text">
                A voting machine web application created with RESTful Web Services.
                </p>
                <a className = "box3-link" href = "https://github.com/CezarBudeci/Voting-Machine_Java_RESTful_Web_Services">see more<Icon icon = "akar-icons:github-fill" width = "24" height = "24" className = "box3-link-icon" /></a>
                <ul className = "box3-list">
                    <li>Java</li>&emsp;
                    <li>rest</li>&emsp;
                    <li>jpa</li>&emsp;
                    <li>mysql</li>
                </ul>
            </div>
            <div className = "box4">
                <p className = "box3-title">Yez</p>
                <p className = "box3-text">
                This is a site where users can read and interact with jokes.
                </p>
                <a className = "box3-link" href = "https://github.com/CezarBudeci/Jokes-Website_PHP">see more<Icon icon = "akar-icons:github-fill" width = "24" height = "24" className = "box3-link-icon" /></a>
                <ul className = "box4-list">
                    <li>php</li>&emsp;
                    <li>javascript</li>&emsp;
                    <li>jquery</li>&emsp;
                    <li>mysql</li>
                </ul>
            </div>
            <div className = "box5">
                <p className = "box3-title">Rock-Paper-Scissors</p>
                <p className = "box3-text">
                A basic Rock-Paper-Scissors app build using Eclipse IDE and WindowBuilder.
                </p>
                <a className = "box3-link" href = "https://github.com/CezarBudeci/Rock-Paper-Scissors_Java">see more<Icon icon = "akar-icons:github-fill" width = "24" height = "24" className = "box3-link-icon" /></a>
                <ul className = "box5-list">
                    <li>Java</li>&emsp;
                    <li>window builder</li>
                </ul>
            </div>
            <div className = "box6">
                <p className = "box3-title">First Portfolio</p>
                <p className = "box3-text">
                This is my first attempt on my personal portfolio made with React.
                </p>
                <a className = "box3-link" href = "https://github.com/CezarBudeci/First_Portfolio">see more<Icon icon = "akar-icons:github-fill" width = "24" height = "24" className = "box3-link-icon" /></a>
                <ul className = "box6-list">
                    <li>JavaScript</li>&emsp;
                    <li>React</li>&emsp;
                    <li>Bootstrap</li>&emsp;
                    <li>HTML</li>&emsp;
                    <li>CSS</li>
                </ul>
            </div>
            <div className = "box7"></div>
        </div>
    );
}

export default Projects;