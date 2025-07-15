import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Col, Row} from 'react-bootstrap'
import { Person } from "../types/Content";

gsap.registerPlugin(ScrollTrigger);

type LandingHeroProps = {
    person: Person;
};

const LandingHero: React.FC<LandingHeroProps> = ({ person}) => {
  const containerRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    const section = containerRef.current;
        if(section){
            const cover_image = section.querySelector(".landing-hero-middle-image");
            const left_col = section.querySelector(".landing-hero-left");
            const right_col = section.querySelector(".landing-hero-right");

            
            //freeze the text tile wraper and trigger text reveal
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'center center',
                    end: '+=130%',
                    scrub: true,
                    markers: false,
                    pin: true,
                    anticipatePin: 1,
                },
            })
            tl.to(cover_image, {
                scale: 1.15,
            }, 0).to(left_col, {x:-100, ease: "expo.inOut"},0).to(right_col, {x:100, ease: "expo.inOut"},0)

        }

    }, []);

  return (
        <Row className="landing-hero" ref={containerRef}>
            <Col className="landing-hero-left" sm={12} md={4}>
                <h1>{person.firstName}</h1>
                <h1 className="last">{person.lastName}</h1>
            </Col>
            <Col className="landing-hero-middle" sm={12}md={4}>
                <div
                    className='landing-hero-middle-image'
                    style={{ backgroundImage: `url(${person.profilePic})`}}
                ></div>
            </Col>
            <Col className="landing-hero-right" sm={12} md={4}>
                <h3>{person.title}</h3>
            </Col>
        </Row>
  );
};

export default LandingHero;
