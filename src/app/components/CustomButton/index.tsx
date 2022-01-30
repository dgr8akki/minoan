import * as React from 'react';
import './styles.scss';
import { Button } from '@mui/material';

type CustomButtonProps = {
  title: string;
  onClick?: Function;
};
const CustomButton = (props: CustomButtonProps) => {
  return (
    <Button
      variant={'outlined'}
      className={'custom-button'}
      onClick={() => props?.onClick?.()}
    >
      {props.title}
    </Button>
  );
};

export default CustomButton;
