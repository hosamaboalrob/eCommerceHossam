import { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Blog from "../Blog/Blog";
import Shop from "../Shop/Shop";
import SingleProduct from "../Shop/SingleProduct";
import CartPage from "../Shop/CartPage";
import About from "../About/About";
import Contact from "../Contact/Contact";
import CreateAccount from "../CreateAccount/CreateAccount";
import Login from "../Login/Login";

export default class App extends Component {
     state ={
      }
  render(){

    return(
      <div>
         <Navbar/>
         <Routes>
             <Route path="/" element={<Home/>}></Route>
             <Route path="/Home" element={<Home/>}></Route>
             <Route path="/Blog" element={<Blog />}></Route>
             <Route path="/About" element={<About />}></Route>
             <Route path="/Contact" element={<Contact />}></Route>
             <Route path="/sign-up" element={<CreateAccount />}></Route>
             <Route path="/login" element={<Login />}></Route>
             <Route path="/Shop" element={<Shop />}></Route>
             <Route path="Shop/:id" element={<SingleProduct />}></Route>
             <Route path="/cart-page" element={<CartPage />}></Route>
           

             
           </Routes>
          <Footer />
      </div>
    )
  }
}