import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Укажите значение',
    defaultValue: 'Укажите значение',
    readonly: false,
    direction: 'bottom right',
    items: [
        { value: '123', content: 'Первый пункт' },
        { value: '1234', content: 'Второй пункт' },
    ],
};

export const Selected = Template.bind({});
Selected.args = {
    label: 'Укажите значение',
    value: '1234',
    readonly: false,
    direction: 'bottom right',
    items: [
        { value: '123', content: 'Первый пункт' },
        { value: '1234', content: 'Второй пункт' },
    ],
};
