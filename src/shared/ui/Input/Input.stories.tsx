import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import '../../../app/styles/variables/global.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Input } from './Input';

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
