import { useReducer } from 'react';
import formReducer from '@lib/reducers/formReducer';

const useForm = (props) => {
  const { initialValues = {}, validate, submit, reset, confirm, diff } = props;
  const initialState = {
    values: initialValues,
    errors: {},
    touched: {},
    isSubmitting: false,
    isModified: false,
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleModified = (newState) => {
    console.log('isModified Changing', newState);
    dispatch({ type: 'SET_MODIFIED', payload: newState });
  };

  const handleChangeDispatch = (fieldName, value) => {
    dispatch({
      type: 'SET_FIELD_VALUE',
      payload: { [fieldName]: value },
    });
  };

  const handleChange = (fieldName) => (event) => {
    event.persist();
    console.log('changing', fieldName);
    handleChangeDispatch(fieldName, event.target.value);

    if (diff && state.values[fieldName] !== event.target.value) {
      handleModified(true);
    }
  };

  const handleSelectChange = (fieldName) => (selectedOption) => {
    handleChangeDispatch(fieldName, selectedOption);

    if (diff && state.values[fieldName] !== selectedOption) {
      handleModified(true);
    }
  };

  const handleBlur = (fieldName) => (event) => {
    event.persist();

    if (validate) {
      const errors = validate(state.values);
      dispatch({ type: 'SET_ERRORS', payload: errors });
    }
    dispatch({ type: 'SET_FIELD_TOUCHED', payload: { [fieldName]: true } });
  };

  const getFieldProps = (fieldName) => ({
    value:
      state.values[fieldName] === '' ? '' : state.values[fieldName] || initialValues[fieldName],
    id: fieldName,
    name: fieldName,
    onChange: handleChange(fieldName),
    onBlur: handleBlur(fieldName),
  });

  const getSelectProps = (fieldName) => ({
    value:
      state.values[fieldName] === '' ? '' : state.values[fieldName] || initialValues[fieldName],
    id: fieldName,
    name: fieldName,
    onChange: handleSelectChange(fieldName),
    onBlur: handleBlur(fieldName),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: 'SUBMIT_ATTEMPT' });
    handleModified(false);
    let errors = {};

    if (validate) {
      errors = validate(state.values);
    }

    if (!Object.keys(errors).length) {
      try {
        await submit(state.values);
        dispatch({ type: 'SUBMIT_SUCCESS' });
      } catch (submitError) {
        dispatch({ type: 'SUBMIT_FAILURE', payload: submitError });
      }
    } else {
      dispatch({ type: 'SET_ERRORS', payload: errors });
      dispatch({ type: 'SUBMIT_FAILURE' });
    }
  };

  const handleConfirm = (event) => {
    event.preventDefault();

    if (confirm) {
      confirm();
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    dispatch({ type: 'RESET_FORM', payload: initialState });

    if (reset) {
      reset();
    }
  };

  return {
    handleChange,
    handleConfirm,
    handleSubmit,
    handleReset,
    handleBlur,
    getFieldProps,
    getSelectProps,
    ...state,
  };
};

export default useForm;
