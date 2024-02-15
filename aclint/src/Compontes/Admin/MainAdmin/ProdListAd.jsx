import React, { useEffect, useState } from 'react';
import './ProdListAd.css';
import axios from 'axios';
import { Link, } from 'react-router-dom';

const ProdListAd = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:7000/productlist')
            .then(response => setUser(response.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
           <button  className='ProListBakBtn'><Link className='LinkProAdLink' to="/admin"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="26" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
          </svg>
Back</Link></button>
        <div className='mainproductListAdDiv'>
      
            {user.map((product) => (
                <div key={product._id} className='mainDivProdListAd'>
                    <Link className="LinkmainDivProdListAd" to={`/productlist/${product._id}`} >

           
                    <div className='ProdAdlistDiv'>
                        <div>
                            <div className='ProdAdlistMainImg' style={{ backgroundImage: product.ImageMain ? `url(${require(`../MainAdmin/IMGProducts/${product.ImageMain}`)})` : 'none' }}>
                                <div className='butonproaddiv'>
                                    <button className='deletebtnproAd'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                        </svg> 
                                    </button>
                                    <button className='btnUpdateProdAd'>
                    
                                        <Link to={`/updateproduct/${product._id}`} className='updatebtnptodlistAd'> <svg className='Linkupdatebtnprodad' xmlns="http://www.w3.org/2000/svg" width="26" height="26"   class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                    </svg></Link></button>
                                </div>
                                {(!product.ImageMain && product.Title) &&
                                    <div className='placeholder'>{product.Title[0].toUpperCase()}</div>
                                }
                            </div>
                        </div>
                        
                        <div className='submimgDivProdlisAd'>
                            <img className='imgSubProLisdiv' src={product.Image1 ? require(`../MainAdmin/IMGProducts/${product.Image1}`) : null} alt="" />
                            <img className='imgSubProLisdiv' src={product.Image2 ? require(`../MainAdmin/IMGProducts/${product.Image2}`) : null} alt="" />
                            <img className='imgSubProLisdiv' src={product.Image3 ? require(`../MainAdmin/IMGProducts/${product.Image3}`) : null} alt="" />
                            <img className='imgSubProLisdiv' src={product.Image4 ? require(`../MainAdmin/IMGProducts/${product.Image4}`) : null} alt="" />
                        </div>
                        <div className='TestlistAdDiv'>
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
                           
                        </div>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
        </div>
    );
};

export default ProdListAd;
