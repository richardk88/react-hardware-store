import React, {Component} from 'react';
import ProductList from './ProductList';

class ShopView extends Component {
    render() {
        const productList = this.props.productList;
        const adminMode = this.props.adminMode;
        const shopMode = this.props.shopMode;

        return (
            <div>
                <h1>Shop View</h1>

                <h2>Products</h2>
                {/* show our list of products here */}
                <ProductList 
                    productList={productList} 
                    adminMode={adminMode} 
                    shopMode={shopMode}
                    addProductToCart={this.props.addProductToCart}
                    />

            </div>
        )
    }
}

export default ShopView;