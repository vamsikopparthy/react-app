import React from 'react';

import {withKnobs,number,array,button,radios} from '@storybook/addon-knobs';

import PersonDetails from './PersonDetails';
    
    const label = 'vamsi';
    
    const groupId = 'Group-ID1';
    
    const defaultValue = 28;


    const options = {
      kiwi: 'kiwi',
      Guava: 'Guava',
      watermelon: 'watermelon'
    }

    export default {
      component: PersonDetails,
      title: 'PersonDetails',
      decorators: [withKnobs]
    }
    



export const value = () => <PersonDetails radios={radios(options,label,defaultValue)}>PersonDetails</PersonDetails>