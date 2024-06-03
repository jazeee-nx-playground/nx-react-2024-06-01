import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    render(<App />);
    expect(screen.getByText(/Welcome nx-react-2024-06-01/gi)).toBeTruthy();
  });
});
