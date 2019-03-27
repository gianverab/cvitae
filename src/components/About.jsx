import React from 'react';
import styled from 'styled-components';
import Social from './Social';

const AboutStyle = styled.div`
  text-align: center;
`;

const AboutAvatar = styled.div`
  padding: 20px 0 0 0;
`;

const AboutImg = styled.img`
  border-radius: 100%;
  width: 160px;
  height: 160px;
  border: 2px solid #e91e63;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`;

const AboutName = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: 0.5em 0 0 0;
  color: #c2185b;
`;

const AboutProfession = styled.p`
  font-weight: 300;
  letter-spacing: 1.6px;
  margin: 0.2em 0 1em 0;
  color: #c2185b;
`;

const AboutBio = styled.p`
  font-size: 1em;
  font-weight: 300;
  color: #757575;
`;

const AboutLocation = styled.p`
  font-size: 1em;
  font-weight: 400;
  color: #757575;
`;

const About = ({ avatar, name, profession, bio, address, social }) => (
  <AboutStyle>
    <div className="About-container">
      <AboutAvatar>
        <figure>
          <AboutImg src={avatar} alt={`${name}`} />
        </figure>
      </AboutAvatar>
      <div className="About-name">
        <AboutName>{name}</AboutName>
      </div>
      <div className="About-tagline">
        <AboutProfession>{profession}</AboutProfession>
      </div>
      <div className="About-desc">
        <AboutBio>{bio}</AboutBio>
      </div>
      <div className="About-location">
        <AboutLocation>{address}</AboutLocation>
      </div>
      <div className="About-social">
        <Social data={social} />
      </div>
    </div>
  </AboutStyle>
);

export default About;
