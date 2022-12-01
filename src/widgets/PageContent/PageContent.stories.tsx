import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PageContent } from './PageContent';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'widgets/PageContent',
    component: PageContent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageContent>;

const Template: ComponentStory<typeof PageContent> = (args) => <PageContent {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
