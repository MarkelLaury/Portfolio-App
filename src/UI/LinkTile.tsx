import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Project } from "../types/Content";


type LinkTileProps = {
    item: Project;
    linkText?: string;
    linkURL?: string;
    textLimit?:number;
    classNames?:string
}

const LinkTile: React.FC<LinkTileProps> = ({item, linkURL, textLimit, classNames}) => {
    return (
        <a 
            className={`basic-tile-link basic-tile-wrapper ${classNames}`} 
            href={linkURL}
            >
            <Row className={`basic-tile`}>
                {item.mediaURLs && 
                <Col className={`basic-tile-image`} style={{backgroundImage: `url(${item.mediaURLs[0]})`}}>
                </Col>
                }

                <Col className="basic-tile-text">
                    <h3 className="title-sans">{item.title}</h3>
                    <p>{item.description.short}</p>
                </Col>
            </Row>
        </a>
    )
}
export default LinkTile;