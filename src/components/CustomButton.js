import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ onClick, children, ...props }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      sx={{
        borderRadius: 2,
        padding: '10px 20px',
        '&:hover': {
          backgroundColor: 'darkblue',
        },
        ...props.sx,
      }}
      aria-label="Call to action button"
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
