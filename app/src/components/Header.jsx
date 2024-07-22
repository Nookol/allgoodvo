import joe from '../assets/joe.png';
import mike from '../assets/secret/drmike.png';
import waves from '../assets/audio-wave.png';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from "../colors.jsx";
import {useEffect, useState} from "react";
import $ from "jquery";

export const Header = () => {
    const [photo, setPhoto] = useState(joe)
    const [name, setName] = useState('Joe Allgood')
    const [skills, setSkills] = useState('Journalist / Voice Actor / Storyteller')
    const [secret, setSecret] = useState('');
    useEffect(() => {
        const handleKeyPress = (e) => {
            setSecret((prevState) => {
                const newSecret = prevState + e.key;
                if (newSecret.includes('drmike')) {
                    setPhoto(mike)
                    setName('Dr Mike')
                    setSkills('Exercise Scientist / Jared Feathers father / not allowed around playgrounds or schools')
                    setTimeout(() => {
                        setPhoto(joe)
                        setName('Joe Allgood')
                        setSkills('Journalist / Voice Actor / Storyteller')}, 10000);
                    return '';
                }
                return newSecret;
            });
        };

        $(document).on('keypress', handleKeyPress);

        return () => {
            $(document).off('keypress', handleKeyPress);
        };
    }, []);

    return (
        <div>
            <StyledContainer fluid>
                <StyledRow className="align-items-center justify-content-center">
                    <StyledCol md={12} lg={12} xl={3} className="d-flex justify-content-center align-items-center">
                        <Image className="main-img" src={photo} />
                    </StyledCol>
                    <Col sm={0} md={0} lg={0} xl={1}/>
                    <StyledCol md={12} lg={12} xl={6}>
                        <div className="text">
                            <Row className="justify-content-center text-center">
                                    <h1>{name}</h1>
                                    <span><h6>{skills}</h6></span>
                            </Row>
                            <Row className="justify-content-center text-center">
                                <Image className="audio-img" src={waves} roundedCircle fluid />
                            </Row>
                            <Button id="btn"><a href={'#contact'}>Lets Connect!</a></Button>
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
    color: inherit; /* Inherits the button's text color */
  }

  #btn {
    text-decoration: none;
    border: none;
    background: ${colors.light};
    color: ${colors.dark};
    border-radius: 5px;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    font-size: 1.1rem;
    padding: 10px 25px;
    transition: 0.2s;
    border: solid .2px;
  }

  #btn:hover {
    color: ${colors.light};
    background: ${colors.dark};
    border: solid .2px #d518e3;
  }

  .audio-img {
    max-height: 20vh;
  }

  .audio-img-desktop {
    width: 10vw;
  }

  .text {
    width: 55vw;
    font-family: "IBM Plex Mono", monospace;
    font-weight: 200;
    font-style: normal;
    border-radius: 20px;
    border-bottom: ${colors.light} 3px solid;
    border-top: ${colors.light} 3px solid;
    padding: 30px;
    background: ${colors.dark};
    color: ${colors.light};
    text-align: center;
  }

  .main-img {
    border-radius: 20px;
    display: block;
    max-width: 50vw;
    max-height: 700px;
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
