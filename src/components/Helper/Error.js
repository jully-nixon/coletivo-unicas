import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;

  return (
    <p
      style={{
        color: '#F28F38',
        fontSize: '0.9rem',
        fontStyle: 'italic',
        margin: '0.2rem 0 0 0.8rem',
        textAlign: 'start',
      }}
    >
      {error}
    </p>
  );
};

export default Error;
