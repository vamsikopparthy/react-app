import React from 'react';
import productStore from '../../stores/clothesStore';


import {action} from 'mobx';

//import ProductModel from '../../../components/sizeCharts'

class SizeFilter extends React.Component {
    
    @action.bound
    onSelectSize (event) {
       this.props.onSelectSize(event.target.value);
    }
    
    render() {
        return (
        <div onClick={this.onSelectSize}>
          <button style={{border:"1px solid black",borderRadius:"30px",margin:"10px",padding:"5px"}} value="XS">XS</button>
          <button style={{border:"1px solid black",borderRadius:"30px",margin:"10px",padding:"5px"}} value="S">S</button>
          <button style={{border:"1px solid black",borderRadius:"30px",margin:"10px",padding:"5px"}} value="M">M</button>
          <button style={{border:"1px solid black",borderRadius:"30px",margin:"10px",padding:"5px"}} value="L">L</button>
          <button style={{border:"1px solid black",borderRadius:"30px",margin:"10px",padding:"5px"}} value="XL">XL</button>
          <button style={{border:"1px solid black",borderRadius:"30px",margin:"10px",padding:"5px"}} value="XXL">XXL</button>
        </div>  
        );
    }
}


export default SizeFilter;