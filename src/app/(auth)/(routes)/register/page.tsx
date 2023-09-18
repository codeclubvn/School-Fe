'use client';

import Modal from '@/components/modals/FormModal';

const RegisterForm = () => {
  const title = [
    {
      title: 'Register',
      subLabel: 'Already have an account?',
      urlName: 'Login',
      url: '/login',
    },
  ];

  const bodyContent = [
    {
      nameField: 'firstname',
      nameLabel: 'First Name',
      type: 'text',
      placeholder: 'John',
      checkWidth: true,
    },
    {
      nameField: 'lastname',
      nameLabel: 'Last Name',
      type: 'text',
      placeholder: 'Nguyen',
      checkWidth: true,
    },
    {
      nameField: 'username',
      nameLabel: 'User Name',
      type: 'text',
      placeholder: 'Elearning123',
    },
    {
      nameField: 'email',
      nameLabel: 'Email',
      type: 'email',
      placeholder: 'elearning@gmail.com',
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
        actionLabel="Register"
        image="/images/login1.png"
        otherLabel="Login with"
        locationImage="right"
      />
    </div>
  );
};

export default RegisterForm;
