import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('email is required')
    .required('email is require'),
  password: Yup.string().required('Password is require'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="Gobarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="e-mail" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <Link to="/register">Create free account</Link>
      </Form>
    </>
  );
}
