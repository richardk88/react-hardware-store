import React, {Component} from 'react';
import Product from './Product';

class ProductList extends Component {
    render() {
        const productList = this.props.productList;

        const productComponents = productList.map((product, index) => {
            return <Product
                productName={product.productName}
                description={product.description}
                price={product.price}
                removeProductFromList={this.props.removeProductFromList}
                key={index}
                keyId={index}
                adminMode={this.props.adminMode}
                shopMode={this.props.shopMode}
                addProductToCart={this.props.addProductToCart}
                removeProductFromCart={this.props.removeProductFromCart}
                />;
        })

        return (
            <div>
                {productComponents}
            </div>
        )
    }
}

export default ProductList;