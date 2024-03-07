import { render } from '@testing-library/react';

import ReactVitestStorybook from './react-vitest-storybook';

describe('ReactVitestStorybook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactVitestStorybook />);
    expect(baseElement).toBeTruthy();
  });
});
