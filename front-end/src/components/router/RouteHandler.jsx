import { Routes, Route } from "react-router-dom"
import Hero from "../hero/Hero.jsx"
import LogIn from "../logIn/LogIn.jsx"
import SignUp from "../signUp/SignUp.jsx"
import AdminDash from "../admindash/AdminDash.jsx"
import ItemUpdatee from "../itemUpdate/ItemUpdate.jsx"

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
            </Routes>
        </>
    );
}