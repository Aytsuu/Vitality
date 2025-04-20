import * as yup from 'yup';

export const signupSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  middleName: yup.string().required('Middle name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  gender: yup.string().required('Geneder is required'),
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})