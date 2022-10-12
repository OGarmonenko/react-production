import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import '@/app/styles/variables/global.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormLight = Template.bind({});
LoginFormLight.args = {
};

export const LoginFormDark = Template.bind({});
LoginFormDark.args = {
};
LoginFormDark.decorators = [ThemeDecorator(Theme.DARK)];
