import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from "../colors.jsx";
import pep from '../assets/pep.png';
import NW32 from '../assets/nw32.png';

export const Experience = () => {
    return (
        <StyledContainer>
            <Row>
                <Col md={2} />
                <Col md={2} className="d-flex justify-content-center align-items-center">
                    <StyledCard
                        title={'Pepperdine Graphic Media'}
                        image={pep}
                        url={'https://pepperdine-graphic.com/tag/joe-allgood/'}
                    />
                </Col>
                <Col md={3} />
                <Col md={3} className="d-flex justify-content-center align-items-center">
                    <StyledCard
                        title={'NewsWaves32'}
                        image={NW32}
                        url={'https://www.youtube.com/embed/GhB06IzjwC0?si=ppnmRsQxw-6ty9Bo&amp;start=11'}
                    />
                </Col>
            </Row>
        </StyledContainer>
    );
};

const Card = (props) => {
    return (
        <div onClick={() => { window.open(props.url, '_blank'); }} className={props.className}>
            <Row className="align-items-center justify-content-center text-center">
                <Col>
                    <h1>{props.title}</h1>
                    <Image src={props.image} fluid />
                </Col>
            </Row>
        </div>
    );
};

const StyledCard = styled(Card)`
  background: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  transition: transform 0.4s;
  height: 300px;

  &:hover {
    transform: scale(1.03);
  }

  h1 {
    color: ${colors.light};
    font-family: "IBM Plex Mono", monospace;
  }

  img {
    max-width: 40%;
    border-radius: 5px;
  }
`;

const StyledContainer = styled(Container)`
  padding: 100px;
  width: 100vw;
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors["text-dark"]};
  font-family: "IBM Plex Mono", monospace;
`;

