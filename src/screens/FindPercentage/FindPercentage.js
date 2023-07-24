import { useState } from 'react';
import useForm from '@lib/hooks/useForm';
import Input from '@components/Input';
import Button from '@components/Button';
import { Form, Container } from './FindPercentage.styled';

const FindPercentage = () => {
  const [result, setResult] = useState();

  const reset = () => {
    setResult(null);
  };

  const validate = (values) => {
    const errors = {};

    for (const [fieldName, value] of Object.entries(values)) {
      if (value === '') {
        errors[fieldName] = `Value can not be left empty.`;
      } else if (!Number(value)) {
        errors[fieldName] = `Value must be an number.`;
      } else if (Number(value) <= 0) {
        errors[fieldName] = `Value must be greater than 0.`;
      } else if (fieldName === 'desired') {
        const desiredNumber = Number(value);
        const totalNumber = Number(values.total);

        if (totalNumber) {
          if (desiredNumber > totalNumber) {
            errors[fieldName] = `Value must be less than "Total Number of Items".`;
          } else if (desiredNumber === totalNumber) {
            errors['total'] = `Value must be greater than "Number of Items You Want".`;
          }
        }
      }
    }

    return errors;
  };

  const submit = (values) => {
    const desiredNumber = Number(values.desired);
    const totalNumber = Number(values.total);

    const result = `${(desiredNumber / totalNumber) * 100}%`;
    setResult(result);
  };

  const { handleSubmit, handleReset, getFieldProps, touched, errors, isModified, values } = useForm(
    {
      initialValues: {
        desired: '',
        total: '',
      },
      validate,
      submit,
      reset,
      diff: true,
    }
  );

  const valuesAreNotEmpty = Object.values(values).some((value) => Boolean(value));
  const errorsAreEmpty = Object.values(errors).every((value) => Boolean(value));

  return (
    <Container>
      <h3>Find Percentage</h3>
      <p>
        This function takes in the following 2 inputs. It will return the desired percentage value.
      </p>
      {result && <p>{result}</p>}
      <Form method='post' onSubmit={handleSubmit}>
        <Input
          placeholder='120'
          fieldName='desired'
          touched={touched}
          errors={errors}
          getFieldProps={getFieldProps}
          label='Number of Items You Want'
          type='number'
        />
        <Input
          placeholder='195'
          fieldName='total'
          touched={touched}
          errors={errors}
          getFieldProps={getFieldProps}
          label='Total Number of Items'
          type='number'
        />
        <Button disabled={!isModified && errorsAreEmpty}>Submit</Button>
        <Button theme='danger' onClick={handleReset} disabled={!valuesAreNotEmpty}>
          Reset
        </Button>
      </Form>
    </Container>
  );
};

export default FindPercentage;
