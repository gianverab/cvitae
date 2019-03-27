import React from 'react';

const Social = props => (
  <div className="Social">
    {props.data && (
      <ul>
        {props.data.map((social, index) => (
          <li className="Social-item" key={`Social-${index}`}>
            <a href={social.url} target="_blank">
              {social.name}
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Social;
