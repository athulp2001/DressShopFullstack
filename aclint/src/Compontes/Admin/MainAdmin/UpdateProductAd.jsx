import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Link, } from 'react-router-dom';
import'./updateProuctAd.css'

const UpdateProductAd = () => {
    const Navigate = useNavigate();
    const { id } = useParams();
    const [updateData, setUpdateData] = useState({
      Title: "",
      Brand: "",
      Description: "",
      Category: "",
      Subcategory: "",
      Price: "",
      Discount: "",
      OfferPer: "",
      Age: "",
      Size: "",
      Color: "",
      Meterial: "",
      Stock: "",
      ImageMain: null,
      Image1: null,
      Image2: null,
      Image3: null,
      Image4: null,
    });
  
    useEffect(() => {
      axios.get(`http://localhost:7000/getproduct/${id}`)
        .then(response => setUpdateData(response.data))
        .catch(error => console.log(error));
    }, [id]);
  
    const updateproduct = async (e) => {
      e.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append('Title', updateData.Title);
        formData.append('Brand', updateData.Brand);
        formData.append('Description', updateData.Description);
        formData.append('Category', updateData.Category);
        formData.append('Subcategory', updateData.Subcategory);
        formData.append('Discount', updateData.Discount);
        formData.append('OfferPer', updateData.OfferPer);
        formData.append('Age', updateData.Age);
        formData.append('Size', updateData.Size);
        formData.append('Color', updateData.Color);
        formData.append('Meterial', updateData.Meterial);
        formData.append('Stock', updateData.Stock);
  
        if (updateData.ImageMain) {
          formData.append('ImageMain', updateData.ImageMain);
        }
        if (updateData.Image1) {
          formData.append('Image1', updateData.Image1);
        }
        if (updateData.Image2) {
          formData.append('Image2', updateData.Image2);
        }
        if (updateData.Image3) {
          formData.append('Image3', updateData.Image3);
        }
        if (updateData.Image4) {
          formData.append('Image4', updateData.Image4);
        }
  
        const response = await axios.put(`http://localhost:7000/updateproduct/${id}`, formData);
        console.log("Updated successfully", response.data);
        Navigate("/productlist");
      } catch (error) {
        console.error(error);
      }
    };
   
  return (
    <div>
      <form onSubmit={updateproduct}>
        
      <div className="main-admin-container">
        <div >

<div className="form-section">

      
<div className='formsectionOne'>
      <label className='mainadLabel' htmlFor="">Title</label>
        <input 
        className='inpBoxMainad' 
        placeholder='Enter title' 
        type="text" 
        name='Title'
        value={updateData.Title}
        onChange={(e) => setUpdateData({ ...updateData, Title: e.target.value })}
        />

        <label className='mainadLabel' htmlFor="">Brand</label>
        <input className='inpBoxMainad' placeholder='Enter brand name' type="text" name='Brand' 
           value={updateData.Brand}
           onChange={(e) => setUpdateData({ ...updateData, Brand: e.target.value })}
         />

        <label className='mainadLabel' htmlFor="">Description</label>
        <input className='inpBoxMainad' placeholder='Enter Description' type="text" name='Description' 
          value={updateData.Description}
          onChange={(e) => setUpdateData({ ...updateData, Description: e.target.value })}/>

        <label className='mainadLabel'>Category</label>
        <select  className='inpBoxMainad' id="" name="Category" 
          value={updateData.Category}
          onChange={(e) => setUpdateData({ ...updateData, Category: e.target.value })}>

        <option value="">Select Category</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="kids">kids</option>
        </select>

        <label className='mainadLabel'>Subcategory</label>
        <select  className='inpBoxMainad' id="" name="Subcategory" 
          value={updateData.Subcategory}
          onChange={(e) => setUpdateData({ ...updateData, Subcategory: e.target.value })} >
        <option value="">Select Subcategory</option>
          <option value="T-Shirts">T-Shirts</option>
          <option value="Casual Shirts">Casual Shirts</option>
          <option value="Formal Shirts">Formal Shirts</option>
          <option value="Sweatshirts">Sweatshirts</option>
          <option value="Sweaters">Sweaters</option>
          <option value="Jackets">Jackets</option>
          <option value="Blazers & Coats">Blazers & Coats</option>
          <option value="Suits">Suits</option>
          <option value="Rain Jackets">Rain Jackets</option>
          <option value="Kurtas & Kurta Sets">Kurtas & Kurta Sets</option>
          <option value="Sherwanis">Sherwanis</option>
          <option value="Nehru Jackets">Nehru Jackets</option>
          <option value="Dhotis">Dhotis</option>
          <option value="Jeans">Jeans</option>
          <option value="Casual Trousers">Casual Trousers</option>
          <option value="Formal Trousers">Formal Trousers</option>
          <option value="Shorts">Shorts</option>
          <option value="Track Pants & Joggersc">Track Pants & Joggers</option>
          <option value="name">name</option>
          <option value="name">name</option>

        </select>


        <label className='mainadLabel' htmlFor="">Price</label>
        <input className='inpBoxMainad' type="number"   placeholder='Enter price' name='Price' 
          value={updateData.Price}
          onChange={(e) => setUpdateData({ ...updateData, Price: e.target.value })}/>

        <label className='mainadLabel' htmlFor="">Discount</label>
        <input className='inpBoxMainad' type="number" placeholder='Enter discount' name='Discount' 
          value={updateData.Discount}
          onChange={(e) => setUpdateData({ ...updateData, Discount: e.target.value })}/>

        <label className='mainadLabel' htmlFor="">Offer in %</label>
        <input className='inpBoxMainad' type="text" placeholder='Enter offer in percentage'  
          value={updateData.OfferPer}
          onChange={(e) => setUpdateData({ ...updateData, OfferPer: e.target.value })}/>

        <label className='mainadLabel'>Age</label>
        <select className='inpBoxMainad' id="" name="Age" 
          value={updateData.Age}
          onChange={(e) => setUpdateData({ ...updateData, Age: e.target.value })}
        >
        <option value="volvo">--------</option>
          <option value="volvo">1y-5y</option>
          <option value="saab">6y-7y</option>
          <option value="mercedes">7y-15y</option>
        </select>

 </div>
 <div className='formsectioTwo'>

        <label className='mainadLabel'>Size</label>
        <select className='inpBoxMainad' id="" name="Size"
          value={updateData.Size}
          onChange={(e) => setUpdateData({ ...updateData, Size: e.target.value })}>
        <option value="volvo">Select Size</option>
          <option value="volvo">S</option>
          <option value="saab">M</option>
          <option value="mercedes">L</option>
          <option value="saab">XL</option>
          <option value="mercedes">XXL</option>
        </select>

        <label className='mainadLabel' htmlFor="">Color</label>
        <input className='inpBoxMainad' type="text"  placeholder='Enter Color' name='Color'
          value={updateData.Color}
          onChange={(e) => setUpdateData({ ...updateData, Color: e.target.value })} />

        <label className='mainadLabel' htmlFor="">Meterial</label>
        <select className='inpBoxMainad' id="" name="Meterial" 
         value={updateData.Meterial}
         onChange={(e) => setUpdateData({ ...updateData, Meterial: e.target.value })}>
        <option value="volvo">Select Meterial</option>
          <option value="volvo">m1</option>
          <option value="saab">m2</option>
          <option value="mercedes">m3</option>
        </select>

        <label className='mainadLabel'>Stock</label>
        <input className='inpBoxMainad' type="number" name='Stock' placeholder='Enter number of Stocks' 
          value={updateData.Stock}
          onChange={(e) => setUpdateData({ ...updateData, Stock: e.target.value })}/>

        <label className='mainadLabel' htmlFor="">Image Main</label>
        <input className='inpBoxMainad' type="file" name="ImageMain"
        
          onChange={(e) => setUpdateData({ ...updateData, ImageMain: e.target.files[0] })} />

        <label className='mainadLabel' htmlFor="">Image 1</label>
        <input className='inpBoxMainad' type="file" name="Image1"
          onChange={(e) => setUpdateData({ ...updateData, Image1: e.target.files[0] })} />

        <label className='mainadLabel' htmlFor="">Image 2</label>
        <input className='inpBoxMainad' type="file" name="Image2"
          onChange={(e) => setUpdateData({ ...updateData, Image2: e.target.files[0] })} />

        <label className='mainadLabel' htmlFor="">Image 3</label>
        <input className='inpBoxMainad' type="file" name="Image3"
          onChange={(e) => setUpdateData({ ...updateData, Image3: e.target.files[0] })} />

        <label className='mainadLabel' htmlFor="">Image 4</label>
        <input className='inpBoxMainad' type="file" name="Image4"
          onChange={(e) => setUpdateData({ ...updateData, Image4: e.target.files[0] })} />

 </div>
 </div>
         <button type='submit' className='UpdateProductAdBtn'>Submit</button> 
         <button type='submit' className='closeProductAdBtn'><Link className='closeBtnUpdateproductad' to="/productlist">Close</Link></button> 
        </div>
       
        
      </div>
      </form>
    </div>
  )
}

export default UpdateProductAd
