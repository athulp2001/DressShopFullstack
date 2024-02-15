import './App.css';
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from'./Compontes/LoginPages/Login.jsx';
import AdReg from './Compontes/LoginPages/AdReg.jsx';
import UserMain from './Compontes/User/Usermain/UserMain.jsx'
import MainAdmin from './Compontes/Admin/MainAdmin/MainAdmin.jsx';
import ProdListAd from './Compontes/Admin/MainAdmin/ProdListAd.jsx';
import UpdateProductAd from './Compontes/Admin/MainAdmin/UpdateProductAd.jsx';
import CardProduct from './Compontes/Admin/MainAdmin/CardProduct.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
         {/* USER SECTION ROUTES */}
        <Route path='/' element={<AdReg></AdReg>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/user' element={<UserMain></UserMain>}></Route>

        {/* ADMIN SECTION ROUTES */}

        <Route path='/admin' element={<MainAdmin></MainAdmin>}></Route>
        <Route path='/admin' element={<MainAdmin></MainAdmin>}></Route>
        <Route path='/productlist' element={<ProdListAd></ProdListAd>}></Route>
        <Route path='/updateproduct/:id' element={<UpdateProductAd></UpdateProductAd>}></Route>
        <Route path='/productlist/:id' element={<CardProduct></CardProduct>}></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
