import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ErrorOnPage } from './ErrorOnPage';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/ErrorOnPage',
    component: ErrorOnPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ErrorOnPage>;

const Template: ComponentStory<typeof ErrorOnPage> = (args) => <ErrorOnPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
