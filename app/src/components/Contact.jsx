import styled from "styled-components";
import {Button, Col, Container, Row} from "react-bootstrap";
import {PhotoFrame} from "./PhotoFrame";
import sun from '../assets/sun.webp';
import pioneer from '../assets/pinoeer.webp';
import rocker from '../assets/rocker.webp';
import {useState} from "react";
import {colors} from "../colors.jsx";


export const Form = () => {
    return (
        <StyledForm>
            <Row>
                <Col>
                    <h1>Let's Connect</h1>
                </Col>
            </Row>
            <form action="https://api.web3forms.com/submit" method="POST">
                <Row>
                    <Col>
                        <StyledLabel>Name</StyledLabel>
                        <input type="hidden" name="access_key" value="da77a402-9785-4fde-a4b5-d793ae537c30"/>
                        <StyledInput type="text" name="name" required/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StyledLabel>Email</StyledLabel>
                        <StyledInput type="email" name="email" required/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StyledLabel>Message</StyledLabel>
                        <StyledTextarea name="message" required></StyledTextarea>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div data-captcha="true"></div>
                        <Button type={'submit'} id="btn">Submit</Button>
                    </Col>
                </Row>
            </form>
            <script src="https://web3forms.com/client/script.js" async defer></script>
        </StyledForm>
    );
}

export const Contact = () => {
    const [photos, setPhotos] = useState([pioneer, sun, rocker])
    return (
        <StyledContainer id={'contact'}>
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

const StyledForm = styled(Container)`
  max-width: 80vw;
  font-family: "IBM Plex Mono", monospace;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 20px;
  }

  form {
    width: 100%;
  }

  #btn {
    text-decoration: none;
    background: ${colors.light};
    color: ${colors.dark};
    cursor: pointer;
    display: block;
    margin: 20px auto 0 auto;
    font-size: .9rem;
    transition: 0.2s;
    border: solid .2px;
  }

  #btn:hover {
    color: ${colors.light};
    background: ${colors.dark};
    border: solid .5px #bd52c6;
  }
`;

const StyledLabel = styled.p`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledContainer = styled(Container)`
  padding: 5% 0 5% 0;
  max-width: 90vw;
  font-family: "IBM Plex Mono", monospace;
  font-weight: 200;
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
`;