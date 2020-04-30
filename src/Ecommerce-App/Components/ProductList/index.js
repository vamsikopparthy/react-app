import React from 'react'; 

import Product from '../Product';

class ProductList extends React.Component {
    
    
    productList() {
            const productList = this.props.productList;
            return productList.map((eachProduct) => {
            return  <Product eachProduct = {eachProduct} />;
            })
        }
        
    
    render() {
        
        
        console.log(this.props.productList);
        return(
            <div style={{display:"flex",flexWrap:"wrap"}}>
              {this.productList()}
            </div>
            );
            
    }
}

export default ProductList;