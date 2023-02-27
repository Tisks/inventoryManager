import * as Yup from 'yup';
import {TInput} from '../../../../common/forms/TextInput';

export const formFieldNames = {
  email: '',
  password: '',
};

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email')
    .required('Email is required.'),
  password: Yup.string(),
});

export const formProps = [
  {
    label: 'Email',
    value: 'email',
  },
  {
    label: 'Password',
    value: 'password',
    inputType: 'password' as TInput,
  },
];

export const toastProps = {
  wrongPasswordUsed: {
    title: 'Email already used',
    description: 'Please enter a different email',
    variant: 'solid',
    status: 'error',
  },
};

export const signUpText = 'Sign Up';
export const loginText = 'Login';
export const toastId = 'successful_login';
