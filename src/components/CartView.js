import React, {Component} from 'react';
import ProductList from './ProductList';

class CartView extends Component {
    render() {
        const productList = this.props.productList;
        

        return(
            <div>
                <h1>Cart</h1>

                <h2>Products</h2>
                <ProductList 
                    productList={productList} 
                    removeProductFromList={this.props.removeProductFromList} 
                    adminMode={this.props.adminMode}
                    shopMode={this.props.shopMode}
                    addProductToCart={this.props.addProductToCart} 
                    removeProductFromCart={this.props.removeProductFromCart}/>

            </div>
        )
    }
}

export default CartView;