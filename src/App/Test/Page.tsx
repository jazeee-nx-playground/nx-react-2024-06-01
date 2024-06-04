import { SpecialButton } from '@nx-react-2024-06-01/ui';

export function TestPage() {
  return (
    <div>
      This is a test{' '}
      <SpecialButton
        variant="contained"
        onClick={() => {
          alert('Hello World Again');
        }}
      >
        Hello World
      </SpecialButton>
    </div>
  );
}
