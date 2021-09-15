import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {FashionHeader} from './FashionHeader';


export default {
  title: 'UI Components/Header/Fashion Header',
  component: FashionHeader,
  argTypes:{
    backgroundColor: {
      control: 'color'
    }
  }
} as ComponentMeta<typeof FashionHeader>;

const Template: ComponentStory<typeof FashionHeader> = (args) => <FashionHeader {...args}/>;

export const BasicHeader = Template.bind({});
BasicHeader.args = {

}