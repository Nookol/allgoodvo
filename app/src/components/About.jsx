import {useState} from "react";
import japan from "../assets/japan.webp";
import concert from "../assets/concert.webp";
import tall from "../assets/tall.webp";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {colors} from "../colors.jsx";
import {PhotoFrame} from "./PhotoFrame.jsx";

const AboutText = () => {
    return (
        <StyledAboutContainer>
            <div className="collumn">
                <div className="head"><span className="headline hl1">Experience </span>
                    <p><span className="headline hl2">Over The Years</span></p>
                </div>
                <small>
                    With over a decade in the performing arts and years in journalism and commercial voice acting, I
                    bring a versatile skill set to every project. Studying abroad has enriched my perspective, allowing
                    me to weave diverse insights into my work. From news anchoring to compelling storytelling, I’m
                    passionate about creating dynamic content that resonates across various platforms and cultures.
                    Let's connect and make something extraordinary. <span className="highlight">It's not just great...it's ALL GOOD!</span>
                </small>
            </div>
        </StyledAboutContainer>)
}

export const About = () => {
    const [photos, setPhotos] = useState([japan, concert, tall])

    return (
        <StyledContainer>
            <StyledRow>
                <StyledCol xs={12} lg={12} xl={6}>
                    <AboutText/>
                </StyledCol>
                <StyledCol xs={12} lg={12} xl={6}>
                    <PhotoFrame photos={photos}/>
                </StyledCol>
            </StyledRow>
        </StyledContainer>
    );
}

const StyledAboutContainer = styled(Container)`
  text-align: center;
  padding: 15px;
  border: #2f2f2f dashed 1px;

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

const StyledContainer = styled(Container)`
  padding: 5% 0 5% 0;
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

  @media (min-width: 992px) {
    justify-content: flex-start;
  }

  @media (min-width: 1200px) {
    justify-content: center;
  }
`;


// return (<StyledAboutContainer>
//         <Row>
//             <div className="collumn">
//                 <div className="head">
//                     <span className="headline hl1">experience</span>
//                 </div>
//             </div>
//         </Row>
//         <Row>
//
//             <small>
//                 With over a decade in the performing arts and several years in journalism and commercial voice
//                 acting, I bring a versatile skill set and a deep cultural understanding to every project. My
//                 experiences studying abroad have enriched my perspective, allowing me to weave diverse cultural
//                 insights into my work. From news anchoring to compelling storytelling, I’m passionate about
//                 creating dynamic content that resonates across various platforms and cultures. Let's connect and
//                 make something extraordinary. <span
//                 className="highlight">It's not just great...it's ALL GOOD!</span>
//             </small>
//             <p>
//                 {/*<small>*/}
//                 {/*    With over a decade in the performing arts and several years in journalism and commercial voice*/}
//                 {/*    acting, I bring a versatile skill set and a deep cultural understanding to every project. My*/}
//                 {/*    experiences studying abroad have enriched my perspective, allowing me to weave diverse cultural*/}
//                 {/*    insights into my work. From news anchoring to compelling storytelling, I’m passionate about*/}
//                 {/*    creating dynamic content that resonates across various platforms and cultures. Let's connect and*/}
//                 {/*    make something extraordinary. <span*/}
//                 {/*    className="highlight">It's not just great...it's ALL GOOD!</span> </small>*/}
//             </p>
//         </Row>
//     </StyledAboutContainer>)