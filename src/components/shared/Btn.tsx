'use client';

import { Button, ButtonProps } from '@mui/material';

interface Props extends ButtonProps {}

const Btn = (props: Props) => {
  return <Button {...props} variant="contained" />;
};

export default Btn;
