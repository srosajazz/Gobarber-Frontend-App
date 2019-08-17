import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="Gobarber" />

      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="e-mail" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">Create account</button>
        <Link to="/register">I already have a login account</Link>
      </Form>
    </>
  );
}
