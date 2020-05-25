import React from 'react'

import {withKnobs,text} from '@storybook/addon-knobs';

import AddEventButtonComponent from './index';

export default {
    component: AddEventButtonComponent,
    title: 'SizeFilter',
    decorators: [withKnobs],
}

const texts = 'vamsi';


export const value = () => <AddEventButtonComponent onClickAddEvent = {text(texts)}>SizeFilter</AddEventButtonComponent>