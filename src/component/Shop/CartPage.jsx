import { updateData } from '@syncfusion/ej2-react-treegrid';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import delImgUrl from '../../assets/images/shop/del.png'
import CheckOutPage from './CheckOutPage';
const CartPage = () => {
    
     const[cartItems,setCartItems]= useState([])
  
    useEffect(()=>{
        const storedCartItmes = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCartItmes)

    },[])
  
    const calculateTotalPrice = (item)=>{
        return item.price * item.quantity;
    }
    const handleIncrease = (item)=>{
        item.quantity += 1;
        setCartItems([...cartItems])
        
        //update Local storage
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }
    //decrease item
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCartItems([...cartItems])
        localStorage.setItem("cart",JSON.stringify(cartItems));

        }
    };//remove item
 
    const handleRemoveItem = (item) => {
        const updateCart = cartItems.filter((cartItem)=>cartItem.id !== item.id);
            setCartItems(updateCart);
            updateLocalStorge(updateCart);
    }
        const updateLocalStorge=(cart)=>{
            localStorage.setItem("cart",JSON.stringify(cart));

        }
        const cartSubTotal = cartItems.reduce((total,item)=>{
            return total + calculateTotalPrice(item);
        },0)

        //order Total

        const orderTotal=cartSubTotal;
     return (
    <div>
         <div className='shop-cart padding-tb'>
            <div className='container'>
                <div className='section-wrapper'>
                    <div className='cart-top'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='cat-product' >Product</th>
                                    <th className='cat-price' >Price</th>
                                    <th className='cat-quantity' >Quantity</th>
                                    <th className='cat-toprice' >Total</th>
                                    {/* <th className='cat-edit' >Edit</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map((item,indx)=>(
                                        <tr key={indx}>
                                            <td className='product-item cat-product'>
                                            <div className='p-thumb'>
                                                    <Link to='/shop' >  <img src={item.img} alt='' /></Link>
                                                </div>
                                                <div className='p-content'>
                                                    <Link to='/shop' > {item.name}</Link>
                                                </div>
                                            </td>
                                            
                                            <td className='cat-price' >${item.price}</td>
                                            <td className='cat-quantity' >
                                                <div className='cart-plus-minus'>
                                                    <div className='dec qtybutton' onClick={()=>handleDecrease(item)} >-</div>
                                                    <input type='text' className='cart-plus-minus-box' name='qtybutton' value={item.quantity}></input>
                                
                                                    <div className='inc qtybutton' onClick={()=>handleIncrease(item)}>+</div>

                                                </div>
                                            </td>

                                            <td className='cat-toprice' > ${calculateTotalPrice(item)}</td>
                                            <td className='cat-edit' >
                                                <a href='#' onClick={()=>handleRemoveItem(item)}>
                                                    <img  src={delImgUrl} alt=''/>
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='cart-bottom'>
                        {/*check out box*/}
                        
                        <div className="cart-checkout-box">
                            <form className='coupon'>
                                <input type='text' className='cart-page-input-text' name='coupon' id='coupon' placeholder='Coupon code ....' />
                                <input type='submit' value="Apply Coupon"></input>
                            </form>
                            <form className='cart-checkout'>
                            {/* <input type='submit' value="Update cart"></input> */}
                                <div>
                                    {/* <CheckOutPage/> */}
                                </div> 
                            </form>
                            <ul className='lab-ul'>
                                             <li>
                                               <strong><span className='pull-left'>Cart SubTotal : <p className='pull-right' ><strong>${cartSubTotal}</strong></p></span>
                                                 
                                            </strong></li>
                                         

                                        </ul>
                        </div>
                        <div className='shipping-box'>
                            <div className='row'>
                                 {/* <div className='col-md-6 col-12'>
                                    <div className='calculate-shiping'>
                                            <h3>Calculate Shiping</h3>
                                                <div className='outline-select'>
                                                    <select>
                                                        <option value="uk">united kinkdom</option>
                                                        <option value="bd">Sangland</option>
                                                        <option value="pak">pakestan</option>
                                                        <option value="ind">india</option>
                                                        <option value="np">nepal</option>
                                                    </select>
                                                    <span className='select-icon'>
                                                        <i className='icofont-rounded-down' ></i>
                                                    </span>
                                                </div>

                                                <div className='outline-select shipping-select'>
                                                    <select>
                                                        <option value="uk">united kinkdom</option>
                                                        <option value="bd">Sangland</option>
                                                        <option value="pak">pakestan</option>
                                                        <option value="ind">india</option>
                                                        <option value="np">nepal</option>
                                                    </select>
                                                    <span className='select-icon'>
                                                        <i className='icofont-rounded-down' ></i>
                                                    </span>
                                                </div>
                                                    <input className='cart-page-input-text' type='text' name='postalCode' id='postalCode' placeholder='PostalCode/ZIP' />
                                                    <button type='submit' > Update Address</button>
                                    </div>
                                </div> */}
                                <div className='col-md-6 col-12'>
                                    <div className='cart-overview'>
                                      {/* <div>Cart Total</div> */}
                                        {/* <ul className='lab-ul'>
                                             <li>
                                                <span className='pull-left'>Cart SubTotal</span>
                                                <p className='pull-right' >${cartSubTotal}</p>
                                            </li>
                                            <li>
                                                <span className='pull-left'>Shiping and Handeling</span>
                                                <p className='pull-right' >Free Shipping</p>
                                            </li>
                                            <li>
                                                <span className='pull-left'>Order Total</span>
                                                <p className='pull-right' >${orderTotal.toFixed(2)}</p>
                                            </li>

                                        </ul> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default CartPage
