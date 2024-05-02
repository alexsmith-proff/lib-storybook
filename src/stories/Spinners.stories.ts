import type { Meta, StoryObj } from '@storybook/react';
import { SpinnerLds } from '../components';

const meta: any = {
  title: 'Example/Spinners/SpinnerLds',
  component: SpinnerLds,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SpinnerLds>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    scale: 1
  },
};
