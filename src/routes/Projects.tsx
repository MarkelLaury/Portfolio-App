import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDictionary } from "../context/DictionaryContext";
import { Link } from "react-router-dom";
import LinkTile from "../UI/LinkTile";

const Projects: React.FC = () => {
  const { dictionary, loading } = useDictionary();

  if (loading || !dictionary) return <div>Loading...</div>;

  return (
    <Container className="py-5">
      <Row className="route-hero">
        <Col><h1>Projects</h1></Col>
      </Row>
      <ListGroup>
        {Object.entries(dictionary.projects).map(([id, project]) => (
          <LinkTile key={id} item={project} linkURL={`/projects/${id}`} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default Projects;
