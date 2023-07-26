import { Routes, Route } from "react-router-dom"
import Hero from "../hero/Hero.jsx"
import LogIn from "../logIn/LogIn.jsx"
import SignUp from "../signUp/SignUp.jsx"
import AdminDash from "../admindash/AdminDash.jsx"
import ItemUpdatee from "../itemUpdate/ItemUpdate.jsx"
import AdminLogIn from "../adminLogin/AdminLogin.jsx"
import Cart from "../cart/Cart.jsx"
import OrdersCart from "../orderscart/OrdersCart.jsx"
import ViewOrders from "../viewOrders/ViewOrders.jsx"
import Payments from "../payments/Payments.jsx"

export const RouteHandler = () =>{
    return(
        <>   
            <Routes>
              <Route path="/" element={<Hero/>}/>
              <Route path="/Hero" element={<Hero/>}/>
              <Route path="/Login" element={<LogIn/>}/>
              <Route path="/SignUp" element={<SignUp/>}/>
              <Route path="/admindash" element={<AdminDash/>}/>
              <Route path='/itemUpdate/:id' element={<ItemUpdatee/>}/>
              <Route path='/admin' element={<AdminLogIn/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/ordersCart' element={<OrdersCart/>}/>
              <Route path='/viewOrders' element={<ViewOrders/>}/>
              <Route path='/payments' element={<Payments/>}/>
            </Routes>
        </>
    );
}