import React, {Component} from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';


// const AdminView = (props) => {
    // const productList = this.props.productList;

    // return(
    //     <div>
    //         <h1>Admin View</h1>

    //         <h2>Products</h2>
    //         {/* show our list of products here */}
    //         <ProductList productList = {productList}/>

    //         <h2>Create product form goes here</h2>
    //         {/* create product form goes here */}
    //     </div>
//     )
// }

class AdminView extends Component {
    render() {
        const productList = this.props.productList;
        

        return(
            <div>
                <h1>Admin View</h1>

                <h2>Products</h2>
                {/* show our list of products here */}
                <ProductList productList={productList} removeProductFromList={this.props.removeProductFromList} adminMode={this.props.adminMode}/>

                <h2>Create product form goes here</h2>
                {/* create product form goes here */}
                <ProductForm addNewProductToProductList={this.props.addNewProductToProductList}/>
                
            </div>
        )
    }
}

export default AdminView;