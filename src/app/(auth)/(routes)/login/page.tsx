'use client';

import { memo } from 'react';

import Modal from '@/components/modals/FormModal';

const LoginForm = () => {
  const title = [
    {
      title: 'Login',
      subLabel: "Don't have an account yet?",
      urlName: 'Register',
      url: '/register',
    },
  ];

  const bodyContent = [
    {
      nameField: 'username',
      nameLabel: 'User Name',
      type: 'text',
      placeholder: 'John123',
    },
    {
      nameField: 'password',
      nameLabel: 'Password',
      type: 'password',
      placeholder: '********',
    },
  ];

  const listImage = [
    { src: '/logo_google.svg', width: 40, height: 40, alt: 'logo google' },
    { src: '/logos_facebook.svg', width: 40, height: 40, alt: 'logo google' },
    { src: '/logo_apple.svg', width: 40, height: 40, alt: 'logo google' },
  ];

  return (
    <div className="">
      <Modal
        listTitle={title}
        listBody={bodyContent}
        imageFooter={listImage}
        actionLabel="Login"
        image="/images/login1.png"
        otherLabel="Login with"
      />
    </div>
  );
};

export default memo(LoginForm);
