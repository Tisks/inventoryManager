import * as Yup from 'yup';
import {TInput} from '../../../../common/forms/TextInput';

export const formFieldNames = {
  name: '',
  email: '',
  password: '',
  password2: '',
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string()
    .email('Must be a valid email')
    .required('Email is required.'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long.')
    .required('Password is required.'),
  password2: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match.')
    .required('Password confirmation is required.'),
});

export const formProps = [
  {
    label: 'Name',
    value: 'name',
  },
  {
    label: 'Email',
    value: 'email',
  },
  {
    label: 'Password',
    value: 'password',
    inputType: 'password' as TInput,
  },
  {
    label: 'Repeat password',
    value: 'password2',
    inputType: 'password' as TInput,
  },
];
