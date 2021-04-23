import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "hello" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "always_learning" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "curiosities" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2 style={{fontWeight: 400}}>Hello there!</h2>
              <p style={{fontWeight: 300}}>
                Welcome to my digital palette, where I share my explorations and little discoveries.
                <br/><br/>
                I'm a PhD student in Computer Science at Queen's University Belfast <StyledExternalLink href="https://blog.martinssamuel.com/my-research">researching</StyledExternalLink> mis-/dis-information detection using machine learning.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} fadeIn={true} durationFadeIn={3000}/>
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} fadeIn={true} durationFadeIn={3000}/>
            </Art>
            <div>
              <h2 style={{fontWeight: 400}}>Always learning</h2>
              <p style={{fontWeight: 300}}>
                I previously was a data scientist at <StyledExternalLink href="https://adoreboard.com/">Adoreboard</StyledExternalLink>. And before that, I graduated with an MEng in Aerospace Engineering from Queen's. <br/>
                <br/>
                Besides my course, I loved learning about drones and startups at <StyledExternalLink href="https://www.evolvedynamics.com/">Evolve Dynamics</StyledExternalLink>, and about metadata, cataloguing and archiving at <StyledExternalLink href="https://www.qub.ac.uk/about/Campus-and-facilities/The-McClay-Library/">the McClay Library</StyledExternalLink>.


              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2 style={{fontWeight: 400}}>Curiosities</h2>
              <p style={{fontWeight: 300}}>
                Amongst my interests, I'm most fond of art, literature and jazz music.
                <br/>Every now and then, I <StyledExternalLink href="https://blog.martinssamuel.com/my-paintings-and-drawings">paint</StyledExternalLink>, take <StyledExternalLink href="https://www.flickr.com/photos/127929628@N07">photographs</StyledExternalLink>, and create <StyledExternalLink href="https://vimeo.com/martinssamuel">animations</StyledExternalLink>.
                <br/>
                <br/>
                You can read about my explorations and other writings on my <StyledExternalLink href="https://blog.martinssamuel.com">blog</StyledExternalLink>. I share some thoughts and ideas in <StyledExternalLink href="https://notes.martinssamuel.com">this notebook</StyledExternalLink>.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} fadeIn={true} durationFadeIn={3000}/>
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  p {
    font-size: 20px;
    font-weight: normal;
  }

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-bottom: -50px;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;
  border-bottom: ${props => props.theme.color.white.lighter} 0.15em solid;
  transition: 0.5s;

  &:hover {
    color: ${props => props.theme.color.white.active};
    text-decoration: none;
    border-bottom: ${props => props.theme.color.white.light} 0.15em solid;
  }
`;

export default About;
