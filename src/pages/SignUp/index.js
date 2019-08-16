import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="Gobarber" />

      <form>
        <input placeholder="Full name" />
        <input type="email" placeholder="e-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Create account</button>
        <Link to="/register">I already have a login account</Link>
      </form>
    </>
  );
}
