import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const SocialStyle = styled.div`
  display: block;
  margin: 0 auto;
`;

const SocialList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const SocialItem = styled.li`
  display: inline;
  margin: 0 0.5em 0 0;
`;

const SocialAnchor = styled.a`
  color: #212121;
  text-decoration: none;
  font-size: 1.2em;
`;

const SocialIcon = styled.i`
  color: ${props => props.theme.color};
`;

const facebook = {
  color: '#3b5998',
};

const twitter = {
  color: '#38a1f3',
};

const linkedin = {
  color: '#0e76a8',
};

const github = {
  color: '#333',
};

const getColor = name => {
  if (name === 'facebook') return facebook;
  if (name === 'twitter') return twitter;
  if (name === 'linkedin') return linkedin;
  if (name === 'github') return github;
};

const Social = props => (
  <SocialStyle>
    {props.data && (
      <SocialList>
        {props.data.map((social, index) => (
          <SocialItem className="Social-item" key={`Social-${index}`}>
            <SocialAnchor href={social.url} target="_blank">
              <ThemeProvider theme={getColor(social.name)}>
                <SocialIcon className={`fab fa-${social.name}`} />
              </ThemeProvider>
            </SocialAnchor>
          </SocialItem>
        ))}
      </SocialList>
    )}
  </SocialStyle>
);

export default Social;
