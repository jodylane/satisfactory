import PropTypes from 'prop-types';
import { Error, InputField } from './Input.styled';

const Input = ({ touched, errors, fieldName, getFieldProps, placeholder, type, label }) => (
  <>
    <label htmlFor={fieldName}>{label}</label>
    {touched[fieldName] && errors[fieldName] && <Error>{errors[fieldName]}</Error>}
    <InputField {...getFieldProps(fieldName)} placeholder={placeholder} type={type} />
  </>
);

Input.propTypes = {
  errors: PropTypes.object,
  fieldName: PropTypes.string,
  getFieldProps: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
