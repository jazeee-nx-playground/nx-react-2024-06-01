import { Button } from '@nx-react-2024-06-01/ui';

export function TestPage() {
  return (
    <div>
      This is a test{' '}
      <Button
        onClick={() => {
          alert('Hello World!');
        }}
      >
        Show Hello World
      </Button>
    </div>
  );
}
