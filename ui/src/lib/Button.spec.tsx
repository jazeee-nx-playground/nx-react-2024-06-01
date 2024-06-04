import { render } from '@testing-library/react';

import { SpecialButton } from './Button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SpecialButton
        variant="contained"
        onClick={() => {
          // noop
        }}
      >
        Test
      </SpecialButton>
    );
    expect(baseElement).toBeTruthy();
  });
});
