import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';
import '../../../app/styles/variables/global.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: 'Text',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
