import { render } from '@testing-library/react';

import ReactVitest from './react-vitest';

describe('ReactVitest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactVitest />);
    expect(baseElement).toBeTruthy();
  });
});
