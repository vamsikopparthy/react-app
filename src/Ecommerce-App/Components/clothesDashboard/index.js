import React from 'react';

import {observer} from 'mobx-react';

import {action} from 'mobx';

import ProductList from '../ProductList';

import productStore from '../../stores/clothesStore';

import SizeFilter from  '../sizeCharts';

import SortBy from '../ProductSort';

import LoadingWrapperWithFailure  from '../../../components/common/LoadingWrapperWithFailure/index.js';

@observer
class ProductPage extends React.Component {
    
    
     componentDidMount() {
        this.doNetworkCalls(); 
     }
     
     onClickSignout() {
        
     }
     
     
     renderSuccessUI = observer(() => {
         
         const {productList} = productStore;
         
         return <ProductList productList = {productList} />;
     })
     
     @action.bound
     renderRetryClick = () => {
         this.doNetworkCalls();
     }
     
     doNetworkCalls() {
         productStore.geteCommerceAppApi();
     }
     
     onSelectSize = (input) => {
         productStore.onSelectSize(input);
     }
     
    onSelectSortBy = (input) => {
        productStore.onChangeSortBy(input);
    } 
     
     
     
     render() {
         const  {productList,getProductListApiStatus,geteCommerceApiError,setGetProductListApiSuccess} = productStore;
        // console.log(productList);
         return(
     <div>
      <div style={{display: "flex",justifyContent:"space-around"}}>  
         <SizeFilter onSelectSize = {this.onSelectSize}/>
           
         <p style={{backgroundColor:"black",height: "30px",marginTop:"20px"}}><SortBy onSelectSortBy = {this.onSelectSortBy}/></p>
       
      </div>
      
      <div>
          <LoadingWrapperWithFailure
          apiStatus = {getProductListApiStatus}
          apiError = {geteCommerceApiError} 
          renderSuccessUI = {this.renderSuccessUI}
          onRetryClick = {this.renderRetryClick}
           />
      </div>      
    </div>  
          );
     }
}

export default ProductPage;