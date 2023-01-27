import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import '../../../app/styles/variables/global.scss';
import { Input } from './Input';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputLight = Template.bind({});
InputLight.args = {
    placeholder: 'placeholder',
    value: 'test',

};

export const InputDark = Template.bind({});
InputDark.args = {
    placeholder: 'placeholder',
    value: 'test',

};
InputDark.decorators = [ThemeDecorator(Theme.DARK)];
