import { render } from '@testing-library/react';

import ReactJest from './react-jest';

describe('ReactJest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactJest />);
    expect(baseElement).toBeTruthy();
  });
});
