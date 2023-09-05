import React, { useState } from 'react'
import productData from './DummyData';

const ProductList = () => {
    const [productsArray, setProductsArray] = useState(productData);

    const brands =[ 'Asus', 'Dell', 'Apple', 'Lenevo'];
    const searchProduct = (e) => {
        const search = e.target.value;
        let filteredData = productData.filter((product) => { return product.model.tolowercase().includes(search.tolowercase()) })
        setProductsArray(filteredData);
    }
    const filteredBrand = (e) => {
        const search = e.target.value;
        let filteredData = productData.filter((product) => { return product.model.tolowercase().includes(search.tolowercase()) })
        setProductsArray(filteredData);
    }
    return (

        <div>
            <header className='bg-dark'>
                <div className='conatiner py-5'>
                    <h1 className="text-center mb-5 text-white fw-bold">Product Listing Page</h1>
                    <input type="text" className='form-control w-75 m-auto' />
                </div>
            </header>
            <div className="row mt-4">
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <h3>Filter Options</h3>
                            <select name="" id=""></select>
                            <option value="">Select Brand</option>
                            
                            <select className='form-control'>
                                {brands.map((b) =>(
                                <option value = {b}>{b}</option>))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className='conatiner-fluid'>
                        {/* <h1>Product List</h1> */}
                        <div className="row">
                            {productsArray.map((product) =>
                                <div className="col-md-3">
                                    <div className="card" style={{ overflow: 'hidden' }}>
                                        <img src={product.Image} alt="" className="my-card-img" />
                                        <div className="card-body">
                                            <p className='text-muted'>{product.sponsored ? 'sponsored' : ''}</p>
                                            <h4>{product.brand}</h4>
                                            <h3>{product.model}</h3>
                                            <h2>{product.price}</h2>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductList