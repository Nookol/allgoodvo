import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {PhotoFrame} from "./PhotoFrame";
import {colors} from "../colors.jsx";
import japan from '../assets/japan.png';
import tall from '../assets/tall.png';
import concert from '../assets/concert.png';
import sun from '../assets/sun.png';
import pioneer from '../assets/pinoeer.png';
import rocker from '../assets/rocker.png';
import run from '../assets/run.png';
import nature from '../assets/nature.png';
import mike1 from "../assets/secret/3.png";
import mike2 from "../assets/secret/4.png";
import mike3 from "../assets/secret/2.png";
import mike4 from "../assets/secret/1.png";
import drMike from "../assets/secret/drmike.png";
import {useEffect, useState} from "react";
import $ from "jquery";

export const Form = () => {
    return (<StyledForm>
            <Col xxl={6}>
                <Row>
                    <h1>Let's Connect</h1>
                </Row>
                <form action="https://api.web3forms.com/submit" method="POST">
                    <Row>
                        <p>Name</p>
                        <input type="hidden" name="access_key" value="da77a402-9785-4fde-a4b5-d793ae537c30"/>
                        <input type="text" name="name" required/>
                    </Row>
                    <Row>
                        <p>Email</p>
                        <input type="email" name="email" required/>
                    </Row>
                    <Row>
                        <p>Message</p>
                        <textarea name="message" required></textarea>
                    </Row>
                    <Row>
                        <div data-captcha="true"></div>
                        <button type="submit">Submit</button>
                    </Row>
                </form>
                <script src="https://web3forms.com/client/script.js" async defer></script>
            </Col>
        </StyledForm>);
}
export const Contact = () => {
    const [photos, setPhotos] = useState([pioneer, sun, rocker])
    const [secret, setSecret] = useState('');
    useEffect(() => {
        const handleKeyPress = (e) => {
            setSecret((prevState) => {
                const newSecret = prevState + e.key;
                if (newSecret.includes('drmike')) {
                    setPhotos([mike1, mike2, mike3])
                    setTimeout(() => {
                        setPhotos(photos)
                    }, 10000);
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


    return (<StyledContainer id={'contact'}>
            <StyledRow>
                <StyledCol xs={12} lg={6}>
                    <PhotoFrame photos={photos}/>
                </StyledCol>
                <StyledCol xs={12} lg={6}>
                    <Form/>
                </StyledCol>
            </StyledRow>
        </StyledContainer>);
}
const AboutText = () => {



    return (<StyledAboutContainer>
            <Row>
                <div className="collumn">
                    <div className="head">
                        <span className="headline hl1">My experience</span>
                    </div>
                </div>
            </Row>
            <Row>

                <small>
                    With over a decade in the performing arts and several years in journalism and commercial voice
                    acting, I bring a versatile skill set and a deep cultural understanding to every project. My
                    experiences studying abroad have enriched my perspective, allowing me to weave diverse cultural
                    insights into my work. From news anchoring to compelling storytelling, I’m passionate about
                    creating dynamic content that resonates across various platforms and cultures. Let's connect and
                    make something extraordinary. <span
                    className="highlight">It's not just great...it's ALL GOOD!</span>
                </small>
                <p>
                    {/*<small>*/}
                    {/*    With over a decade in the performing arts and several years in journalism and commercial voice*/}
                    {/*    acting, I bring a versatile skill set and a deep cultural understanding to every project. My*/}
                    {/*    experiences studying abroad have enriched my perspective, allowing me to weave diverse cultural*/}
                    {/*    insights into my work. From news anchoring to compelling storytelling, I’m passionate about*/}
                    {/*    creating dynamic content that resonates across various platforms and cultures. Let's connect and*/}
                    {/*    make something extraordinary. <span*/}
                    {/*    className="highlight">It's not just great...it's ALL GOOD!</span> </small>*/}
                </p>
            </Row>
        </StyledAboutContainer>)
}
export const About = () => {
    const [photos, setPhotos] = useState([japan, concert, tall])
    const [secret, setSecret] = useState(' ');
    useEffect(() => {
        const handleKeyPress = (e) => {
            setSecret((prevState) => {
                const newSecret = prevState + e.key;
                if (newSecret.includes('drmike')) {
                    setPhotos([mike4, mike1, mike3])
                    setTimeout(() => {
                        setPhotos(photos)
                    }, 10000);
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
    return (<StyledContainer>
            <StyledRow>
                <StyledCol xs={12} lg={6}>
                    <AboutText/>
                </StyledCol>
                <StyledCol xs={12} lg={6}>
                    <PhotoFrame photos={photos}/>
                </StyledCol>
            </StyledRow>
        </StyledContainer>);
}

const StyledAboutContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  small {
    font-weight: normal;
    font-size: 21px;
  }

  .highlight {
    color: ${colors.light};
    background: ${colors.dark};
    font-weight: lighter;
    font-size: 22px;
  }
`;

const StyledForm = styled(Container)`
  max-width: 80vw;
  font-family: "IBM Plex Mono", monospace;
  font-weight: 200;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.2rem;
  }
`;

const StyledContainer = styled(Container)`
  padding: 100px;
  max-width: 90vw;
  font-family: "IBM Plex Mono", monospace;
  font-weight: 200;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.2rem;
  }
`;

const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (min-width: 992px) {
    justify-content: flex-start;
  }

  @media (min-width: 1200px) {
    justify-content: center;
  }
`;
