import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components';

const meta: any = {
    title: 'Example/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        value: 'Значение',
        disabled: false,
        error: false,
        type: 'text',
        placeholder: 'placeholder'
    },
};

export const Password: Story = {
    args: {
        value: 'password',
        disabled: false,
        error: false,
        type: 'password',
        placeholder: 'placeholder'
    },
};

export const Disabled: Story = {
    args: {
        value: 'Disabled',
        disabled: true,
        error: false,
        type: 'text',
        placeholder: 'placeholder'
    },
};
