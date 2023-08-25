'use client';

import { Button, ButtonProps } from 'antd';

interface Props extends ButtonProps {}

const Btn = (props: Props) => {
  return <Button {...props} />;
};

export default Btn;
