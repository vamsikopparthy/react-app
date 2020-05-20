import React from 'react';

import CollapseExpand from '../.././components/CollapseExpand';

import Toggle from '../.././components/ViewEditToggle';



class PracticeAdvancedConceptsRoute extends React.Component {
   
   render() {
       return(
           <div>
              <CollapseExpand />
              <Toggle />
           </div>
           );
   } 
}

export default PracticeAdvancedConceptsRoute;