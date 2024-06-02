export interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const { onClick, children } = props;
  return <button onClick={onClick}>{children}</button>;
}
