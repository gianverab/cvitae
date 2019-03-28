import React from 'react';
import PStyled from '../styled/PStyled';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';

const Education = props => {
  return (
    <div className="Education">
      <H2Styled name="Education" />
      <div className="Education-container">
        {props.data.map((edu, index) => (
          <div className="Education-item" key={`Edu-${index}`}>
            <H3Styled>
              {edu.degree} {edu.institution}
              <br />
              <span>
                {edu.startDate} - {edu.endDate}
              </span>
            </H3Styled>
            <PStyled name={edu.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
