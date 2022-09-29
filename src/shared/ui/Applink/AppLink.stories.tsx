import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    theme: AppLinkTheme.PRIMARY,
    children: 'Text',

};

export const InvertableLight = Template.bind({});
InvertableLight.args = {
    theme: AppLinkTheme.INVERTABLE,
    children: 'Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    theme: AppLinkTheme.PRIMARY,
    children: 'Text',

};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertableDark = Template.bind({});
InvertableDark.args = {
    theme: AppLinkTheme.INVERTABLE,
    children: 'Text',
};
InvertableDark.decorators = [ThemeDecorator(Theme.DARK)];
