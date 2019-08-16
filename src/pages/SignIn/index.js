import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Gobarber" />

      <form>
        <input type="email" placeholder="e-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <Link to="/register">Create free account</Link>
      </form>
    </>
  );
}
