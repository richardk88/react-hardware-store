import React, {Component} from 'react';
import AdminView from './AdminView';
import ShopView from './ShopView';
import CartView from './CartView';

class HomePage extends Component {

    constructor() {
        super();
        
        this.state = {                          //state is the shape of our data in a specific point in time
            itemCurrentlyOnSale: 'A Hammer',
            editSaleItem: true,
            adminMode: false,
            shopMode: true,
            cartList: [],
            productList: [
                {
                productName: 'Hammer',
                description: 'Itsa hammer',
                price: 12.3,
                },
                {
                productName: 'Nail',
                description: 'Itsa nail',
                price: 0.12,
                }
            ]
        };
    }

    _toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({editSaleItem});                     //update state with a new value
    };

    _handleItemCurrentlyOnSaleChange = (event) => {
 	    const itemCurrentlyOnSale = event.target.value;
 	    this.setState({itemCurrentlyOnSale});           //update state with a new value
   	};

     _addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList];
        productList.push(newProduct);
        this.setState({productList});
    };

    _removeProductFromList = (keyId) => {
        const productList = [...this.state.productList];
        productList.splice(keyId, 1);
        this.setState({productList});
    };

    _addProductToCart = (index) => {
        const product = {...this.state.productList[index]};
        const cartList = [...this.state.cartList];
        cartList.push(product);
        this.setState({cartList});
    }

    _removeProductFromCart = (index) => {
        const cartList = [...this.state.cartList];
        cartList.splice(index, 1);
        this.setState({cartList});
    }

    render() {
        return (
            <div>
                <h1>My Hardware Store</h1>
                <div>
                    <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
                    <span>
                        {this.state.adminMode ?
                            <button onClick={this._toggleEditSaleItem}>
                                { this.state.editSaleItem ? 'Hide' : 'Edit Sale Item' }
                            </button>
                        : null}
                    </span>
                    
                     {this.state.adminMode? 
                        <div>
                            {this.state.editSaleItem ? 
                                <div>
                                    <input 
                                        onChange={this._handleItemCurrentlyOnSaleChange} 
                                        value={this.state.itemCurrentlyOnSale} 
                                        type="text"
                                    />
                                </div> 
                            : null} 
                        </div>
                    : null}

                    {this.state.adminMode ?
                    <AdminView 
                        productList={this.state.productList} 
                        addNewProductToProductList={this._addNewProductToProductList}
                        removeProductFromList={this._removeProductFromList}
                        adminMode={this.state.adminMode}/>
                    :
                    <ShopView 
                        productList={this.state.productList}
                        adminMode={this.state.adminMode}
                        shopMode={this.state.shopMode}
                        addProductToCart={this._addProductToCart}/>
                    }

                    <CartView 
                        productList={this.state.cartList} 
                        removeProductFromCart={this._removeProductFromCart} /> 
                </div>
            </div>
        )
    }
}

export default HomePage;