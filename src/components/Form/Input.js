import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Error from '../Helper/Error';

const Input = ({
  id,
  label,
  placeholder,
  value,
  type,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <>
      <FloatingLabel
        label={label}
        className="mb-3"
        style={{
          color: '#F2BBBB',
          fontSize: '0.9rem',
        }}
      >
        <Form.Control
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          type={type}
          spellCheck="false"
          onChange={onChange}
          onBlur={onBlur}
          className="form-control"
          style={{
            color: '#D9D3EF',
            fontWeight: 400,
            backgroundColor: 'transparent',
            borderColor: '#F2BBBB',
            borderWidth: 1,
          }}
        />
        {/* <p>value: {value}</p> */}
        <Error error={error} />
      </FloatingLabel>
    </>
  );
};

export default Input;
