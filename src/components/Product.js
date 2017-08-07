import React, {Component} from 'react';
 
 class Product extends Component {

    render() {

     const productName = this.props.productName;
     const description = this.props.description;
     const price = this.props.price;
     const keyId = this.props.keyId;
     const adminMode = this.props.adminMode;
     const shopMode = this.props.shopMode;

     return (
         <div>
           <h3>{productName}</h3>
           <div>{description}</div>
           <div>{price}</div>
           {adminMode ? <button onClick={() => {this.props.removeProductFromList(keyId)}}>Delete</button> : null }
           {adminMode ? null : <button onClick={() => {this.props.addProductToCart(this.props.keyId)}}>Add To Cart</button> }
           {shopMode ? null : <button onClick={() => {this.props.removeProductFromCart(this.props.keyId)}}>Remove From Cart</button> }
         </div>
     );
 
   }
 }
 
 export default Product;