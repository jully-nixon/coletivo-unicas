import React from 'react';

/**
 * Validações para campos de formulário com component Input
 *  Como utilizar:
 * const formFieldName = useForm(type)
 *
 * Possibilidades de Validação:
 * * Validar tipo específico com regex -> useForm(type)
 * Validar sem tipo específico (required) -> useForm()
 * Não validar/Não obrigatório ->useForm('notRequired')
 */

const typesValidation = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
};

const useForm = (fieldType) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (fieldType === 'notRequired') {
      return true;
    }
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (
      typesValidation[fieldType] &&
      !typesValidation[fieldType].regex.test(value)
    ) {
      setError(typesValidation[fieldType].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
