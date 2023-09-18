'use client';

import Modal from '@/components/modals/FormModal';

const RegisterForm = () => {
  const title = [
    {
      title: 'Forgot Password',

      urlName: 'Register',
      url: '/register',
    },
  ];

  const bodyContent = [
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
      checkWidth: true,
      placeholder: '********',
    },
    {
      nameField: 'confirmpassword',
      nameLabel: 'Confirm Password',
      type: 'password',
      checkWidth: true,
      placeholder: '********',
    },
  ];

  return (
    <div className="">
      <Modal
        listTitle={title}
        listBody={bodyContent}
        actionLabel="Change Password"
        image="/images/login1.png"
        locationImage="right"
      />
    </div>
  );
};

export default RegisterForm;
