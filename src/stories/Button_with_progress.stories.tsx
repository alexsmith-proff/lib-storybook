import type { Meta, StoryObj } from '@storybook/react';
import { ButtonWithProgress } from '../components';

const meta: any = {
    title: 'Example/Buttons/Button with progress',
    component: ButtonWithProgress,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ButtonWithProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: 'Кнопка',
        textSize: 16,
        textColor: '#fff',
        textColorHover: '#eee',
        textWeight: 'nomal',
        isComponentLeft: false,
        gap: 0,
        backgroundColor: '#0B1331',
        backgroundColorHover: '#000103',
        borderRadius: 0,
        transitionHover: '.5s',
        padding: '10px 35px',
        progressIsVisible: true,
        progressWidth: 150,
        progressHeight: 3,
        progressValue: 35,
        progressFontSize: 12,
        progressBackgroundColor: '#0B1331',
        isEnable: true,
    },
};
