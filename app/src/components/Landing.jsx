import joe from '../assets/joe.webp';
import waves from '../assets/audio-wave.png';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import styled from 'styled-components';
import {colors} from "../colors.jsx";

export const Landing = ( ) => {
    return (
        <div>
            <StyledContainer fluid>
                <StyledRow className="align-items-center justify-content-center">
                    <Col sm={0} md={0} lg={0} xl={1}/>
                    <StyledCol md={12} lg={12} xl={2} className="d-flex justify-content-center align-items-center">
                        <Image className="main-img" src={joe}/>
                    </StyledCol>
                    <Col sm={0} md={0} lg={0} xl={1}/>
                    <StyledCol md={12} lg={12} xl={6}>
                        <div className="text">
                            <Row className="justify-content-center text-center">
                                <h1>Joe Allgood</h1>
                                <span><h6>Journalist / Voice Actor / Storyteller</h6></span>
                            </Row>
                            <Row className="justify-content-center text-center">
                                <Image className="audio-img" src={waves} roundedCircle fluid/>
                            </Row>
                            <a href={'#contact'}> <Button id="btn">Lets Connect!</Button></a>
                        </div>
                    </StyledCol>
                </StyledRow>
            </StyledContainer>
        </div>
    );
};

const StyledContainer = styled(Container)`
  background-image: radial-gradient(${colors.light} .2px, ${colors.dark} 1.1px);
  background-size: 18px 18px;
  padding: 30px;
  display: flex;
  align-items: center;
  color: ${colors["text-dark"]};
  overflow-x: hidden;

  small {
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
  }

  #btn {
    text-decoration: none;
    background: ${colors.light};
    color: ${colors.dark};
    cursor: pointer;
    display: block;
    margin: 0 auto;
    font-size: .9rem;
    transition: 0.2s;
    border: solid .2px;
  }

  #btn:hover {
    color: ${colors.light};
    background: ${colors.dark};
    border: solid .2px ${colors.highlight};
  }

  .audio-img {
    max-height: 20vh;
    filter: grayscale(50%);

  }

  .audio-img-desktop {
    width: 10vw;
  }

  .text {
    width: 55vw;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 200;
    font-style: normal;
    border-radius: 10px;
    border-bottom: ${colors.light} .1px solid;
    border-top: ${colors.light} .1px solid;
    padding: 30px;
    background: ${colors.dark};
    color: ${colors.light};
    text-align: center;
  }

  .main-img {
    border-radius: 20px;
    display: block;
    max-width: 35vw;
    max-height: 45vh;
    width: auto;
    height: auto;
  }

  h1 {
    font-weight: 900;
  }


  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding: 10px;
    overflow-x: hidden;


    h6 {
      font-size: 14px;
    }

    .audio-img {
      width: 45vw;
      display: block;
      margin: 15px auto 30px auto;
    }

    .text {
      border-radius: 20px;
      text-align: center;
      width: 95vw;
    }

    h1, h4 {
      text-align: center;
    }

    h1 {
      font-size: 2.4rem;

    }

    p {
      padding: 0 10px;
    }
  }
`;

const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (min-width: 1200px) {
    justify-content: center;
  }
`;
