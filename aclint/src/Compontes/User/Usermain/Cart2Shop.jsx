import React from 'react'
import'./Cart2shop.css'
import img1 from "../MainUserImg/pexels-darwin-jair-quispe-paitan-13937710.jpg"
const Cart2Shop = () => {
  return (
    <div>
        
      <div className='maincart2Div'>
        <div className='imgCar2Div'>
        <img className='imgcart2' src={img1} alt="" />
        </div>
        <div className='secondndDivCart2'>
        <h5>COOL T-SHIRTS CLOSET</h5>
        <p>It’s time for a SS18 wardrobe update! We’ve got the
           latest arrivals and all the hottest trends.
           Shop our newest clothing, footwear & accessories.</p>

        <button>DISCOVER MORE</button>
        </div>
      </div>
<hr />
      <div className='maincart2Div'>
        <div className='secondndDivCart2'>
        <h5>COOL T-SHIRTS CLOSET</h5>
        <p>It’s time for a SS18 wardrobe update! We’ve got the
           latest arrivals and all the hottest trends.
           Shop our newest clothing, footwear & accessories.</p>
           
        <button>DISCOVER MORE</button>
        </div>
        <div className='imgCar2Div'>
        <img className='imgcart2' src={img1} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Cart2Shop
