import React, { useState, useEffect, useRef } from "react";
import { Row } from 'react-bootstrap';

function FadeIn(props) {
    const[isVisible, setIsVisible] = useState(true);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);

        return () => observer.unobserve(domRef.current);
    }, []);

    return(
        <Row className = {`${props.class} fade-in ${isVisible ? 'is-visible' : ''}`} ref = {domRef} id = {props.id}>
            {props.children}
        </Row>
    );
}

export default FadeIn;