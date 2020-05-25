import React from 'react';

class PersonDetails extends React.Component {
    
    render() {
   const {children,radios} = this.props;
        return(
             <div>
             {radios}
             </div>
            );
    }
}

export default PersonDetails;