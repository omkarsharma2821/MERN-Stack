import React, { useState } from 'react'
import productData from './DummyData';

const ProductList = () => {
    const [productsArray, setProductsArray] = useState(productData);
  return (
    <div className='conatiner'>
        <h1>Product List</h1>
    <div className="row">
        {productsArray.map( (product) =>
        <div className="col-md-3">
            <div className="card">
                <img src={product.Image} alt="" />
                <div className="card-body">
                    {/* <h4>{product.Image}</h4> */}
                    <h3>{product.model}</h3>
                    <h2>{product.price}</h2>
                </div>
            </div>
        </div>
        )}
    </div>
    </div>
  )
}

export default ProductList