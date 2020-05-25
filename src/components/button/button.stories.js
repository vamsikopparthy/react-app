import React from 'react';

import {withKnobs,color} from '@storybook/addon-knobs'


import {action} from '@storybook/addon-actions';

import { addDecorator } from '@storybook/react'; 

import Button from './buttons';

export default {
    component: Button,
    title: 'Button',
    decorators: [withKnobs]
}

export const text = () => <Button onClick={action('clicked')}>Hello world</Button> 

text.story = {

decorators:[storyFn => <div style = {{ color:color('color','red')}}>{storyFn()}</div>]

}
