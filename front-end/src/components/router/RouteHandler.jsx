import { Routes, Route } from "react-router-dom"
import Hero from "../hero/Hero.jsx"
import LogIn from "../logIn/LogIn.jsx"
import SignUp from "../signUp/SignUp.jsx"

export const RouteHandler = () =>{
    return(
        <>   
            <Routes>
              <Route path="/" element={<Hero/>}/>
              <Route path="/Hero" element={<Hero/>}/>
              <Route path="/Login" element={<LogIn/>}/>
              <Route path="/SignUp" element={<SignUp/>}/>
            </Routes>
        </>
    );
}