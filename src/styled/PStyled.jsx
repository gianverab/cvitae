import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  font-weight: 400;
  margin: 0.5em 0;
  color: #212121;
`;

const PStyled = ({ name }) => <StyledP>{name}</StyledP>;

export default PStyled;