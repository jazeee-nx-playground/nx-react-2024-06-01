export interface ButtonProps {
  onClick: () => void;
}

export function Button(props: ButtonProps) {
  const { onClick } = props;
  return <button onClick={onClick}>Click Me</button>;
}
