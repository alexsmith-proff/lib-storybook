import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: any = {
  title: 'Example/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
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
    width: 120,
    height: 40,
    text: 'Кнопка',
    textSize: 16,
    textColor: '#FAFAFA',
    textWeight: 'norm',
    textNoWrap: true,
    isComponentLeft: true,
    gap: 0, // расстояние между текстом и компонентом
    backgroundColor: '#0B1331',
    textColorHover: '#0B1331',
    backgroundColorDisable: 'rgba(11, 19, 49, 0.6)',
    borderRadius: 0,
    transitionHover: '.3s',
    padding: '10px 35px',
    isEnable: true,
    isFocusEnable: true,
  },
};
