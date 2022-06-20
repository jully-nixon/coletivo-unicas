import React from 'react';
import { Form } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';

const Select = ({ id, label, options, value, setValue, ...props }) => {
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
        <Form.Select
          value={value}
          onChange={({ target }) => setValue(target.value)}
          className="custom-select"
          style={{
            color: '#D9D3EF',
            fontWeight: 400,
            backgroundColor: 'transparent',
            borderColor: '#F2BBBB',
            borderWidth: 1,
          }}
          {...props}
        >
          <option value="" disabled>
            Selecione uma opção...
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
      {/* <p>value: {value}</p> */}
    </div>
  );
};

export default Select;
