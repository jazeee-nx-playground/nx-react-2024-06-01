import { Button, type ButtonProps } from '@mui/material';

export interface SpecialButtonProps extends ButtonProps {
  variant: 'contained' | 'outlined';
  children: React.ReactNode;
}

export function SpecialButton(props: SpecialButtonProps) {
  return <Button {...props} />;
}
