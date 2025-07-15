import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDictionary } from "../context/DictionaryContext";
import LandingHero from "../UI/LandingHero";
import { Link } from "react-router-dom";
import LinkTile from "../UI/LinkTile";
import LandingPostsSlider from "../UI/LandingPostsSlider";


const Landing: React.FC = () => {
  const { dictionary, loading } = useDictionary();
  

  if (loading || !dictionary) return <div>Loading...</div>;

  return (
    <Container className="py-5">
      <LandingHero person={dictionary} />
      <Row className="p-5 landing-about">
        <Col xs={12} sm={2} md={4}>
          <h2>About Me</h2>
        </Col>
        <Col xs={12} sm={10} md={8}>
          <h5>{dictionary.tagLine}</h5>
          <p>{dictionary.description}</p>
        </Col>
      </Row>
      <Row className="landing-projects">
        <Col xs={12} sm={2} md={4}>
            <h2>Project Samples</h2>
          </Col>
          <Col xs={12} sm={10} md={8}>
          <ListGroup>
          {Object.entries(dictionary.projects).map(([id, project]) => (
            <LinkTile item={project} linkURL={`/projects/${id}`} />
          ))}
        </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
