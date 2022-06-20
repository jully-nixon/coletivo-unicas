import React from 'react';
import { Form } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import Error from '../Helper/Error';

const TextArea = ({
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
    <div className="form-group">
      <FloatingLabel
        label={label}
        className="mb-3"
        style={{
          color: '#F2BBBB',
          fontSize: '0.9rem',
        }}
      >
        <Form.Control
          as="textarea"
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
            height: '10rem',
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
    </div>
  );
};

export default TextArea;
