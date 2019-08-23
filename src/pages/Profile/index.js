import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

// import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

// import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full Name" />
        <Input name="email" type="email" placeholder="Your email address" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Verify your old password "
        />
        <Input type="password" name="Password" placeholder="New password " />
        <Input
          type="password"
          name="ConfirmPassword"
          placeholder="Confirm your new password "
        />

        <button type="submit">Update Profile</button>
      </Form>

      <button type="button">Logout</button>
    </Container>
  );
}
