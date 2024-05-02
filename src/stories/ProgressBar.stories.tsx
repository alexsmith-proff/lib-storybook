import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '../components';

const meta: any = {
    title: 'Example/ProgressBar',
    component: ProgressBar,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        width: 250,
        height: 5,
        progressValue: 55,
        isVisible: true,
        fontSize: 18,
        backgroundColor: '#0B1331'
    },
};
