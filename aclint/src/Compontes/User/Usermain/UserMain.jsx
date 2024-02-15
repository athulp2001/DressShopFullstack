import React from 'react'
import UserNav from '../NabarUser/UserNav'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../MainUserImg/pexels-quang-anh-ha-nguyen-884977.jpg';
import img2 from '../MainUserImg/pexels-andrea-piacquadio-842811.jpg';
import img3 from '../MainUserImg/pexels-andrea-piacquadio-920379.jpg';
import'./UserMain.css'
import BestSelleruser from './BestSelleruser';
import Cart2Shop from './Cart2Shop';
import Cart3shop from './Cart3shop';
import Fotteruser from '../FotterUser/Fotteruser';
const UserMain = () => {
  return (
    <div>
      <UserNav></UserNav>
      <Carousel className='mainCarouselDivueser' transition="scroll">
      <Carousel.Item>
      <img
            className="imgcarouser"
            src={img1}
            alt="First slide"
          />
        <Carousel.Caption >
        <button className='MainuserShopbtn'>Shop Now</button>
          <p className='pcarosul'>Discover timeless style at our boutique, where curated collections of elegant dresses await. From casual day dresses to show-stopping evening gowns, we offer a sophisticated blend of fashion for every occasion.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="imgcarouser"
            src={img2}
            alt="First slide"
          />
        <Carousel.Caption>
          <button className='MainuserShopbtn'>Shop Now</button>
          <p className='pcarosul'> Embrace your individuality with our diverse range of dresses that celebrate femininity and empower confidence. At our dress shop, we believe in helping you express your unique style through carefully curated selections that blend trends with timeless grace.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="imgcarouser"
            src={img3}
            alt="First slide"
          />
        <Carousel.Caption>
        <button className='MainuserShopbtn'>Shop Now</button>
          <p className='pcarosul'> 
          Elevate your wardrobe with our handpicked dresses that prioritize quality craftsmanship and on-trend designs. Experience personalized service and find the perfect dress for any event, creating memorable fashion moments at our welcoming boutique.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* New SECTIONS */}
    <div>
<BestSelleruser></BestSelleruser>
<Cart2Shop></Cart2Shop>
<Cart3shop></Cart3shop>
<Fotteruser></Fotteruser>

    </div>

    </div>
  )
}

export default UserMain
