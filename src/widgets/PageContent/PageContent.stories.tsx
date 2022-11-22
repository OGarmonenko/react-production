import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageContent } from './PageContent';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'shared/PageContent',
    component: PageContent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageContent>;

const Template: ComponentStory<typeof PageContent> = (args) => <PageContent {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
