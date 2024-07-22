import { Container, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from "../colors.jsx";
import {useState} from "react";

export const PhotoFrame = ({ photos }) => {
    const [focussedImg, setFocussedImg] = useState(11);

    return (
        <StyledContainer>
            <Row>
                {photos && photos.map((photo, index) => (
                    <Col xs={4} key={index} className="d-flex justify-content-center align-items-center">
                        <Image onMouseOver={()=>setFocussedImg(99)} onMouseLeave={()=>setFocussedImg(99)} className={`frame-img p${focussedImg}`} src={photo} />
                    </Col>
                ))}
            </Row>
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)`
  height: fit-content;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors["text-dark"]};
  
  img:hover {
    transform: scale(1.1);
  }
  

  h1 {
    font-weight: 900;
    background: #fff;
    padding: 10px 10vw;
    display: block;
    position: absolute;
    z-index: 99;
    transform: translateX(-50%);
    left: 50%;
    margin: 0 auto;
    border-radius: 10px;
  }

  .frame-img {
    border-radius: 20px;
    padding: 5px;
    display: block;
    max-width: 28vw;
    max-height: 500px;
    width: auto;
    height: auto;
    transition: 0.5s;
  }
  
  @media (max-width: 768px) {
    height: fit-content;
    justify-content: center;
    align-items: center;
    padding: 50px 0 100px 0;


    .frame-img {
      max-width: 24vw;
    }
    }
`;
