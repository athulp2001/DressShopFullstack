import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import'./CardProduct.css'


const CardProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        
        axios.get(`http://localhost:7000/productlist/${id}`)
            .then(response => setProduct(response.data))
            .catch(err => console.log(err));
    }, [id]);
    return (
        <div className='mainFIRSTdivCardProduct'>
           
            {product && (
                <div className='mainCardDivSectionAd'>

                  <div className='maninimgdDivCardProAd'>

                  <div className='CardProdAdlistMainImg' style={{ backgroundImage: product.ImageMain ? `url(${require(`../MainAdmin/IMGProducts/${product.ImageMain}`)})` : 'none' }}>
                            
                  </div>
                  <div className='submimgDivProdCardAd'>
                            <img className='imgSubProCarddiv' src={product.Image1 ? require(`../MainAdmin/IMGProducts/${product.Image1}`) : null} alt="" />
                            <img className='imgSubProCarddiv' src={product.Image2 ? require(`../MainAdmin/IMGProducts/${product.Image2}`) : null} alt="" />
                            <img className='imgSubProCarddiv' src={product.Image3 ? require(`../MainAdmin/IMGProducts/${product.Image3}`) : null} alt="" />
                            <img className='imgSubProCarddiv' src={product.Image4 ? require(`../MainAdmin/IMGProducts/${product.Image4}`) : null} alt="" />
                  </div>

                </div>        
                        <div className='TestCardAdDiv'>
                            <h6>Title: {product.Title}</h6>
                            <h6>Brand: {product.Brand}</h6>
                            <p>Description: {product.Description}</p>
                            <p>Category: {product.Category}</p>
                            <p>Subcategory: {product.Subcategory}</p>
                            <p>Offer: {product.OfferPer}</p>
                            <p>Age: {product.Age}</p>
                            <p>Size: {product.Size}</p>
                            <p>Color: {product.Color}</p>
                            <p>Material: {product.Meterial}</p>
                            <p>Stock: {product.Stock}</p>
                            <button  className='ProListBakBtncard'><Link className='ProListBakBtncardLink' to="/productlist">Back</Link></button>
                        </div>
                   
                </div>
            )}
        </div>
    );
};

export default CardProduct;
