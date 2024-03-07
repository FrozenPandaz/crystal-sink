import type { Meta, StoryObj } from '@storybook/react';
import { ReactVitestStorybook } from './react-vitest-storybook';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ReactVitestStorybook> = {
  component: ReactVitestStorybook,
  title: 'ReactVitestStorybook',
};
export default meta;
type Story = StoryObj<typeof ReactVitestStorybook>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ReactVitestStorybook!/gi)).toBeTruthy();
  },
};
