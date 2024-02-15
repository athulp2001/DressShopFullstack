
import { useState } from 'react'
import Navadmin from '../Navadmin/Navadmin'
import'./MainAdmin.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

const MainAdmin = () => {

  const [formData, setFormData]=useState({
            Title:"",
            Brand:"",
            Description:"",
            Category:"",
            Subcategory:"",
            Price:"",
            Discount:"",
            OfferPer:"",
            Age:"",
            Size:"",
            Color:"",
            Meterial:"",
            Stock:"",
            ImageMain:null,
            Image1:null,
            Image2:null,
            Image3:null,
            Image4:null,        
  })

  const HadilInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const mainImgChage = (e) => {
    setFormData({ ...formData, ImageMain: e.target.files[0] });
  };

  const Img1Chage = (e) => {
    setFormData({ ...formData, Image1: e.target.files[0] });
  };
  const Img2Chage = (e) => {
    setFormData({ ...formData, Image2: e.target.files[0] });
  };
  const Img3Chage = (e) => {
    setFormData({ ...formData, Image3: e.target.files[0] });
  };
  const Img4Chage = (e) => {
    setFormData({ ...formData, Image4: e.target.files[0] });
  };

  const Handilclick =async (e)=>{
    e.preventDefault();
    const data = new FormData();
    data.append("Title", formData.Title);
    data.append("Brand", formData.Brand);
    data.append("Description", formData.Description);
    data.append("Category", formData.Category);
    data.append("Subcategory", formData.Subcategory);
    data.append("Price", formData.Price);
    data.append("Discount", formData.Discount);
    data.append("OfferPer", formData.OfferPer);
    data.append("Age", formData.Age);
    data.append("Size", formData.Size);
    data.append("Color", formData.Color);
    data.append("Meterial", formData.Meterial);
    data.append("Stock", formData.Stock);
    data.append("ImageMain", formData.ImageMain);
    data.append("Image1", formData.Image1);
    data.append("Image2", formData.Image2);
    data.append("Image3", formData.Image3);
    data.append("Image4", formData.Image4);

    try {
      await axios.post("http://localhost:7000/productAdmin",data,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Form submitted successfully');

    }catch (error){
      console.error('Error submitting form:', error);
    }
  }

  return (
    <div>
      <Navadmin></Navadmin>
      <div className='adminmainspace'></div>
      <button className='productlistBtnAdmain'> <Link className='LinkproductlistBtnAdmain' to="/productlist">Product List
      <svg className='arrowBtnAdminMain' xmlns="http://www.w3.org/2000/svg" width="46" height="26" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
      </svg>
      </Link> 

</button> 
      <form onSubmit={Handilclick}>
      <div className="main-admin-container">
        <div >

<div className="form-section">

      
<div className='formsectionOne'>
  
      <label className='mainadLabel' htmlFor="">Title</label>
        <input className='inpBoxMainad' placeholder='Enter title' type="text" name='Title'  value={formData.Title} onChange={HadilInputChange}/>

        <label className='mainadLabel' htmlFor="">Brand</label>
        <input className='inpBoxMainad' placeholder='Enter brand name' type="text" name='Brand' value={formData.Brand} onChange={HadilInputChange} />


        <label className='mainadLabel' htmlFor="">Description</label>
        <input className='inpBoxMainad' placeholder='Enter Description' type="text" name='Description' value={formData.Description} onChange={HadilInputChange}/>

        <label className='mainadLabel'>Category</label>
        <select  className='inpBoxMainad' id="" name="Category" value={formData.Category} onChange={HadilInputChange}>
        <option value="">Select Category</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="kids">kids</option>
        </select>

        <label className='mainadLabel'>Subcategory</label>
        <select  className='inpBoxMainad' id="" name="Subcategory" value={formData.Subcategory} onChange={HadilInputChange}>
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
        <input className='inpBoxMainad' type="number"   placeholder='Enter price' name='Price' value={formData.Price} onChange={HadilInputChange}/>

        <label className='mainadLabel' htmlFor="">Discount</label>
        <input className='inpBoxMainad' type="number" placeholder='Enter discount' name='Discount' value={formData.Discount} onChange={HadilInputChange}/>

        <label className='mainadLabel' htmlFor="">Offer in %</label>
        <input className='inpBoxMainad' type="text" placeholder='Enter offer in percentage' name='OfferPer' value={formData.OfferPer} onChange={HadilInputChange} />

        <label className='mainadLabel'>Age</label>
        <select className='inpBoxMainad' id="" name="Age" value={formData.Age} onChange={HadilInputChange}>
        <option value="volvo">--------</option>
          <option value="volvo">1y-5y</option>
          <option value="saab">6y-7y</option>
          <option value="mercedes">7y-15y</option>
        </select>

 </div>
 <div className='formsectioTwo'>

        <label className='mainadLabel'>Size</label>
        <select className='inpBoxMainad' id="" name="Size" value={formData.Size} onChange={HadilInputChange}>
        <option value="volvo">Select Size</option>
          <option value="volvo">S</option>
          <option value="saab">M</option>
          <option value="mercedes">L</option>
          <option value="saab">XL</option>
          <option value="mercedes">XXL</option>
        </select>

        <label className='mainadLabel' htmlFor="">Color</label>
        <input className='inpBoxMainad' type="text"  placeholder='Enter Color' name='Color' value={formData.Color} onChange={HadilInputChange}/>

        <label className='mainadLabel' htmlFor="">Meterial</label>
        <select className='inpBoxMainad' id="" name="Meterial" value={formData.Meterial} onChange={HadilInputChange}>
        <option value="">Select Meterial</option>
          <option value="m1">m1</option>
          <option value="m2">m2</option>
          <option value="m3">m3</option>
        </select>

        <label className='mainadLabel'>Stock</label>
        <input className='inpBoxMainad' type="number" name='Stock' placeholder='Enter number of Stocks' value={formData.Stock} onChange={HadilInputChange}/>

        <label className='mainadLabel'  htmlFor="">Image Main</label>
        <input className='inpBoxMainad' type="file" name="ImageMain" onChange={mainImgChage} />

        <label className='mainadLabel'  htmlFor="">Image 1</label>
        <input className='inpBoxMainad' type="file" name="Image1"  onChange={Img1Chage}/>

        <label className='mainadLabel'  htmlFor="">Image 2</label>
        <input className='inpBoxMainad' type="file" name="Image2" onChange={Img2Chage} />

        <label className='mainadLabel'  htmlFor="">Image 3</label>
        <input className='inpBoxMainad' type="file" name="Image3" onChange={Img3Chage} />

        <label className='mainadLabel'  htmlFor="">Image 4</label>
        <input className='inpBoxMainad' type="file" name="Image4" onChange={Img4Chage} />
 </div>
 </div>
         <button type='submit'>Submit</button> 
       
        </div>
     
        
      </div>
      </form>
    </div>
  )
}

export default MainAdmin 
