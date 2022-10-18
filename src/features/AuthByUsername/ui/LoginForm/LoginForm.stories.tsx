import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/variables/global.scss';
import LoginForm from './LoginForm';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormLight = Template.bind({});
LoginFormLight.args = {};
LoginFormLight.decorators = [StoreDecorator({
    loginForm: { username: 'ads', password: '123' },
})];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [StoreDecorator({
    loginForm: { username: 'ads', password: '123', error: 'ERROR' },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
