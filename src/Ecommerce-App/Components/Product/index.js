import React from 'react';



class Product extends React.Component {
   
   
   
   render() {
      const {eachProduct} =  this.props;
      const {installments,currencyFormat,imageURL,title,price} = eachProduct;
      // console.log(this.props.eachProduct);
       return(
         <div style={{width: "300px"}}>
         {eachProduct.isFreeShipping === true ? <p style={{border: "1px black",width: "120px",position:"absolute",marginLeft:"100px",padding:"5px",color:"white",backgroundColor:"black"}}>FreeShipping</p>: null}
         <img style={{height:"200px"}} src={imageURL} />
         <p>{title}</p>
         <div style={{display:"flex"}}>
         <p>{currencyFormat}</p>
         <p>{price}</p>
         </div>
         <div style={{display:"flex"}}>
           <p>or {currencyFormat}</p>
           <p>{installments}</p>
           <p> x {(price/installments).toFixed(2)} </p>
         </div>
         <div>
           <button style={{margin: "20px",backgroundColor:"black",color:"white",border:"1px solid black",borderRadius:"5px"}}>Add to cart</button>
         </div>
         </div>
            );
   }    
}

export default Product;