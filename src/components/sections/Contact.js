import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Contact = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "contact" }
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
      <Section id="@" accent>
        <StyledContainer>

          <div>
            <h2 style={{fontWeight: 400}}>Contact</h2>
            <div>
              <p style={{fontWeight: 300}}>
                Want to collaborate, or share an idea or a thought?
                <br/>Do get in touch!
                <br/><br/>
                <StyledExternalLink href="https://twitter.com/m_arti">Twitter</StyledExternalLink>
                <br/>
                <br/>
                <StyledExternalLink href="mailto:marti.samuel1@gmail.com">Email</StyledExternalLink>
              </p>
            </div>
          </div>
          <Art>
            <Img fluid={data.art_story.childImageSharp.fluid} fadeIn={true} durationFadeIn={3000}/>
          </Art>
        </StyledContainer>
      </Section>
    )}
  />
);

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  p {
    font-size: 20px;
  }

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
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
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -20%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 50%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    margin-top: 200px;
  }

`;

export default Contact;
