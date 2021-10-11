import { Icon } from '@iconify/react';
import { Link } from 'react-scroll';

function Hero() {
    return(
        <div className = "hero-main-div">
            <div className = "hero-secondary-div">
                <h1 className = "hero-title1"><span  className = "hero-title3">I am </span>Cezar Budeci,</h1>
                <h2 className = "hero-title2">Junior Software Developer</h2>
            </div>
            <Link className = "hero-triangle" to = "projects" spy = {false} smooth = {true} duraton = {500}>
                <Icon icon="fe:arrow-down" color="#6edc00" width="150" height="150" className = "hero-triangle-icon" />
            </Link>
        </div>
    );
}

export default Hero;