import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";
import {VideoContent} from "./Content";
import demo from '../assets/audio/demo.mp3';
import {colors} from "../colors.jsx";

export const Demos = () => {
    return (
        <div style={{width: '100vw', background: colors.dark}}>
            <StyledContainer>
                <StyledRow>
                    <h1>My Work</h1>
                </StyledRow>
                <StyledRow>
                    <StyledCol>
                        <VideoContent url={'https://www.youtube.com/embed/x6kn-eIaCMQ?si=7Oi1hjGrkUrRdKJX'}/>
                    </StyledCol>
                    <StyledCol>
                        <div>
                            <h1>Voiceover Demo</h1>
                            <audio controls>
                                <source src={demo} type="audio/mp3"/>
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </StyledCol>
                </StyledRow>
                <StyledRow>
                    <h1>Insert education and stuff here</h1>
                </StyledRow>
            </StyledContainer>

        </div>
    );
}

const StyledContainer = styled(Container)`
  color: ${colors.light};
  padding: 50px;
  font-family: "IBM Plex Mono", monospace;
  font-weight: 200;
`;

const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px;
`;

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
