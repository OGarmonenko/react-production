import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonSize, ButtonVariant } from './Button';
import { Theme } from '@/app/providers/ThemeProvider';
import '../../../app/styles/variables/global.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonVariant.CLEAR,

};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
    children: 'Text',
    theme: ButtonVariant.OUTLINE,

};

export const OutlineLightSizeL = Template.bind({});
OutlineLightSizeL.args = {
    children: 'Text',
    theme: ButtonVariant.OUTLINE,
    size: ButtonSize.L,

};

export const OutlineLightSizeXL = Template.bind({});
OutlineLightSizeXL.args = {
    children: 'Text',
    theme: ButtonVariant.OUTLINE,
    size: ButtonSize.XL,

};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonVariant.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundLight = Template.bind({});
BackgroundLight.args = {
    children: 'Text',
    theme: ButtonVariant.BACKGROUND,

};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
    children: 'Text',
    theme: ButtonVariant.BACKGROUND,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInvertedLight = Template.bind({});
BackgroundInvertedLight.args = {
    children: 'Text',
    theme: ButtonVariant.BACKGROUND_INVERTED,

};

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
    children: 'Text',
    theme: ButtonVariant.BACKGROUND_INVERTED,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonVariant.BACKGROUND_INVERTED,
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonVariant.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: ButtonVariant.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
