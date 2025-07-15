import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useDictionary } from "../context/DictionaryContext";
import { Link } from "react-router-dom";

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const { dictionary, loading } = useDictionary();

  if (loading || !dictionary) return <div>Loading...</div>;

  const project = dictionary.projects[id || ""];

  if (!project) return <div>Project not found.</div>;

  return (
    <Container className="py-5">
      <Row className="route-hero">
        <Col><h1>{project.title}</h1></Col>
      </Row>
      <Row>
       <Col className={`basic-tile-image`} style={{backgroundImage: `url(${project.mediaURLs[0]})`}}></Col>
      </Row>
      <Row className="my-4">
        <Col>
          {project.demoURL && <Link className="basic-tile-button" to={project.demoURL}>Demo</Link>}
          {project.repoURL && <Link className="basic-tile-button" to={project.repoURL}>Repo</Link>}
        </Col>
      </Row>
      <Row>
        <p>{project.description.detailed}</p>
      </Row>
    </Container>
  );
};

export default ProjectDetails;
