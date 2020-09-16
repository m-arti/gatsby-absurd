import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

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
                AI Researcher
                <br/>
                & Designer
                <br/>
              </h1>
              <br/>
              <br/>
              <p>
                <StyledExternalLink href="https://msblog.netlify.app/blog">
                  Read my writings
                </StyledExternalLink>
              </p>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

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
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
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
  border-radius: 3px;
  background-image: linear-gradient(to right, #fdb085 0%, #ff5500 51%, #fda085 100%);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .1), 0 1px 20px 0 rgba(0, 0, 0, 0);
  background-size: 200% auto;
  transition: 0.5s;

  &:hover {
    transform: translateY(-3px);
    background-position: right center;
    box-shadow: 0 5px 7px 0 rgba(0,0,0,.1), 0 1px 10px 0 rgba(0,0,0,.1);
  }
`;

export default Header;
