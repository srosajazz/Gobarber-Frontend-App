import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is require'),
  email: Yup.string()
    .email('email is required')
    .required('email is require'),
  password: Yup.string()
    .min(6, 'Minimum of 6 characters')
    .required('Password is require'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="Gobarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="e-mail" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">Create account</button>
        <Link to="/register">I already have a login account</Link>
      </Form>
    </>
  );
}
