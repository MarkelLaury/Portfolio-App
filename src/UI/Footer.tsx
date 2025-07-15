import React from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useDictionary } from "../context/DictionaryContext";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const { dictionary, loading } = useDictionary();
  

  return (
    <footer className="p-5">
          <Row>
            <Col  xs={12} sm={5}>
              <h2>{dictionary?.firstName}
              {" "}
              {dictionary?.firstName}</h2>
              <p>{dictionary?.tagLine}</p>
            </Col>
            <Col xs={12} sm={6}>
            <Row >
              {dictionary?.socials.map((social, id)=>{
                  return <Col xs={2}><Link to={social.url}>{social.name}</Link></Col>
                })
              }
            </Row>
            </Col>
          </Row>
        </footer>
  );
};

export default Footer;
