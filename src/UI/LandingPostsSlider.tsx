import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Col, Row} from 'react-bootstrap'
import LinkTile from './LinkTile';
import { Project } from "../types/Content";

gsap.registerPlugin(ScrollTrigger);

type LandingHeroProps = {
  posts: Record<string, Project>
};

const LandingPostsSlider: React.FC<LandingHeroProps> = ({ posts}) => {
  const containerRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    const section = containerRef.current;
        if(section){
            const title = section.querySelectorAll(".scroll-slider-text");
            
            //freeze the text tile wraper and trigger text reveal
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: title,
                    start: 'top center',
                    end: '+=190%',
                    scrub: true,
                    markers: true,
                    pin: true,
                    anticipatePin: 1,
                },
            }).to(title,{ease: 'expo.in'})
            
        }

    }, []);

  return (
        <Row className="scroll-slider" >
           <Col ref={containerRef} sm={12} md={3} className="scroll-slider-text-wrapper">
                <h2 className='scroll-slider-text'>
                    Project Samples
                </h2>
             </Col>
             <Col className='scroll-slider-slide-wrapper' sm={12} md={9}>
                {Object.entries(posts).map(([id, project]) => (
                    <LinkTile item={project} linkURL={`/projects/${id}`} classNames={'scroll-slider-slide'} />
                ))}
             </Col>
        </Row>
  );
};

export default LandingPostsSlider;
