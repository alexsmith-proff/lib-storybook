import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: any = {
  title: 'Example/Button',
  component: Button,
  // parameters: {
  //   // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  //   layout: 'centered',
  // },
  // // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    backgroundColor: '#fff',
    color: "#000",
    padding: '10px 25px',
    children: 'Кнопка7'
  },
};

export const Radius: Story = {
  args: {
    backgroundColor: '#fff',
    color: "#000",
    borderRadius: 30,
    padding: '10px 25px',
    children: 'Кнопка7'
  },
};
