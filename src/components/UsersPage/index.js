import React, {Component} from 'react';
import {observer,inject} from 'mobx-react';
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure';
import stores from '../../stores';
import NoDataView from '../common/NoDataView';

const userStore = stores.usersStore

@inject('usersStore')
@observer
class UserPage extends Component {
    
    componentDidMount() {
        this.doNetworkCalls()
    }
    
    renderUsersList = () => {
        const {users} = this.getUserStore()
        if(users.length === 0){
            return <NoDataView />
        }
        return users.map(userName => <div key={Math.random()}>{userName}</div>);
    }
    
    getUserStore = () => {
        return this.props.usersStore
    }
    
    doNetworkCalls = () => {
        this.getUserStore().getUsersApi()
    }
    
    render() {
        const {getUsersApiStatus,getUsersApiError} = this.getUserStore()
        return (
            <LoadingWrapperWithFailure
              apiStatus={getUsersApiStatus}
              apiError={getUsersApiError}
              onRetryClick={this.doNetworkCalls}
              renderSuccessUI={this.renderUsersList}
              />
            );
    }
}

export default UserPage;