import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import TypeIt from "typeit-react";

// This could be any component that generates HTML.
const TypedHeading = ({ children }) => {
  return (
    <div style={{fontWeight: 400}}>
      <TypeIt
        options = {{
          loop: true,
          speed: 150,
          cursorChar: '│',
          cursorSpeed: 1000,
          waitUntilVisible: true
        }}
        getBeforeInit = {
          instance => {
            // get instance
            instance

            // do animations
            .type("AI Researcher<br/>& Designer")
            .pause(1500)
            .delete(8)
            .pause(700)

            .type("Teacher")
            .pause(700)
            .delete(7)
            .pause(700)

            .type("Student")
            .pause(700)
            .delete(23)
            .pause(700)

            .type("Explorer ─")
            .pause(2000)
            .delete(10)
            .pause(700)

            .type("Human Being")
            .pause(1500)
            .type(".")
            .pause(5000)
            .type('')
            ;

            // return instance
            return instance;
          }
        }
      />
    </div>
  );
};

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "research_and_design" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_build.childImageSharp.fluid} fadeIn={true} durationFadeIn={3000}/>
            </Art>
            <Text>

              <h1 style={{fontWeight: 400}}>

                <TypedHeading></TypedHeading>

                <p style={{marginTop:'30px', marginBottom:'-10px', maxWidth:'400px', fontFamily:'Work Sans', fontSize:'20px', fontWeight:'300'}}>Currently studying misinformation detection using machine learning.</p>
                <br/>
              </h1>

              <div style={{display:'inline-flex'}}>
                <div style={{ padding:'0px 10px 30px 0px'}}>
                  <p>
                    <StyledExternalLink href="https://blog.martinssamuel.com" style={{minWidth:'100px', textAlign:'center'}}>
                      Writings
                    </StyledExternalLink>
                  </p>
                </div>
                <div style={{ padding:'0px 0px 30px 10px'}}>
                  <p>
                    <StyledExternalLink href="https://notes.martinssamuel.com" style={{minWidth:'100px', textAlign:'center'}}>
                      Ideas
                    </StyledExternalLink>
                  </p>
                </div>
              </div>

            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 150px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-bottom: -50px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  @media (max-width: ${props => props.theme.screen.md}) {
    margin-top: -50px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: -50px;
  }

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
      padding-right: 60px;
    }
  }
`;

const Text = styled.div`
  justify-self: center;
  padding-left: 100px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-left: 0px;
    text-align: center;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    padding-left: 0px;
    text-align: center;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: ${props => props.theme.color.white.regular};
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  display: inline-block;

  /* thanks to Hima Vincent for gradient hover effect (https://codemyui.com/pure-css-gradient-button-hover-effect) */
  flex-wrap: wrap;
  padding: 5px 15px 5px 15px;
  border-radius: 30px;
  background-image: linear-gradient(to right, #000 -20%, #000  51%, #111 100%); /*#ff5500, #d15010, #fda085, #fdb085*/
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, .1), 0 1px 20px 0 rgba(0, 0, 0, 0);
  background-size: 200% auto;
  transition: 0.5s;

  &:hover {
    transform: translateY(-3px);
    background-position: right center;
    box-shadow: 0 5px 7px 0 rgba(0,0,0,.1), 0 1px 10px 0 rgba(0,0,0,.1);
  }
`;

export default Header;
