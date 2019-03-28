import React from 'react';
import PStyled from '../styled/PStyled';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';

const Certificates = props => (
  <div className="Certificates">
    <H2Styled name="Certificates" />
    <div className="Certificates-container">
      {props.data.map((cert, index) => (
        <div className="Certificates-item" key={`Cert-${index}`}>
          <H3Styled>
            {cert.name} | {cert.institution}
            <br />
            {cert.date}
          </H3Styled>
          <PStyled name={cert.description} />
        </div>
      ))}
    </div>
  </div>
);

export default Certificates;
