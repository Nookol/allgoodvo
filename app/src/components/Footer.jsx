import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";
import { colors } from "../colors.jsx";

export const Footer = () => {
    const date = new Date();
    return (
        <StyledFooter>
            <Container>
                <Row>
                    <Col>
                        <p>Follow me on social media</p>
                        <SocialIcons>
                            <a href="https://www.instagram.com/always_allgood/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.youtube.com/@joeallgood7727" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a href="https://www.linkedin.com/in/joe-allgood-voice/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </SocialIcons>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>&copy; {date.getFullYear()} AllgoodVo All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
  background: ${colors.dark};
  color: ${colors.light};
  padding: 20px 0;
  text-align: center;
  font-family: "IBM Plex Mono", monospace;

  p {
    margin: 10px 0;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;

  a {
    color: ${colors.light};
    font-size: 1.5rem;
    transition: color 0.2s;

    &:hover {
      color: ${colors.highlight};
    }
  }
`;
