import React from 'react';

import CollapseExpand from '../.././components/CollapseExpand';

import Toggle from '../.././components/ViewEditToggle';

import Maxwidth from '../.././components/WindowMaxwidth';

class PracticeAdvancedConceptsRoute extends React.Component {
   
   render() {
       return(
           <div>
              <CollapseExpand />
              <Toggle />
              <Maxwidth />
           </div>
           );
   } 
}

export default PracticeAdvancedConceptsRoute;