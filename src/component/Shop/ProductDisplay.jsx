import React, { useState } from 'react'
import { Link, json } from 'react-router-dom';


const desc="The product is excellent and there are many colors and models. The visitor is advised to buy it and there is a warranty"
const ProductDisplay = ({item}) => {
    console.log(item)
    
    const {name,img,id,price,seller,ratingsCount,quantity}=item;

    const [preQuantity,setQuantity]= useState(quantity)
    const [coupon,setCoupon]= useState("")
    const [size,setSize]= useState("Select Size")
    const [color,setColor]= useState("Select Color")
    
    const handleSizeChange=(e)=>{
        setSize(e.target.value)
    }

    const handleColorChange=(e)=>{
        setColor(e.target.value)
    }
    const handleDecrease=()=>{
        if (preQuantity > 1 ) {
            setQuantity(preQuantity - 1)
        }
    }
    const handleIncrease=()=>{
      
            setQuantity(preQuantity + 1)
        
    }
    const handelSubmit =(e)=>{
            e.preventDefault();
            const product={
                id:id,
                img:img,
                name:name,
                price:price,
                quantity:preQuantity,
                size:size,
                color:color,
                coupon:coupon

            }
            console.log(product)
            const existingCart=JSON.parse(localStorage.getItem("cart"))||[];
            
            const  existingProductIndex=existingCart.findIndex((item)=>item.id===id)
            
            if (existingProductIndex !== -1) {
                existingCart[existingProductIndex].quantity += preQuantity;
                
            }else{
                existingCart.push(product);     
                   }
        
                 localStorage.setItem("cart",JSON.stringify(existingCart));

                //reset Form Fileds
                setQuantity(1);
                setSize("Select Size");
                setColor("Select Color");
                setCoupon("");
            }

   
    return (
    <div>
       <div>
          <h4>{name}</h4> 
          <p className='rating' >
            <i className='icofont-star' ></i>
            <i className='icofont-star' ></i>
            <i className='icofont-star' ></i>
            <i className='icofont-star' ></i>
            <i className='icofont-star' ></i>
            <span>{ratingsCount}</span>
          </p>
          <h4>${price}</h4>
          <h6>{seller}</h6>
          <p>{desc}</p>
       </div>        
       <div>
         <form onSubmit={handelSubmit}>
         <div className='select-product size'>
                <select value={size} onChange={handleSizeChange}>
                    <option>Select Size</option>
                    <option >SM</option>
                    <option >MD</option>
                    <option >LG</option>
                    <option >XL</option>
                    <option >XXL</option>
                </select>
                <i className='icofont-rounded-down' ></i>
            </div>
            <div className='select-product color'>
                <select value={color} onChange={handleColorChange}>
                    <option>Select Color</option>
                    <option >RED</option>
                    <option >GREEN</option>
                    <option >YELLO</option>
                    <option >PINK</option>
                    <option >BLACK</option>
                    <option >BLUE</option>
                    <option >WHITE</option>
                </select>
                <i className='icofont-rounded-down' ></i>
            </div>
            <div className='cart-plus-minus'>
                <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                <input className='cart-plus-minus-box' type='text' name='qtyBtn' id='qtyBtn' 
                value={preQuantity} onChange={(e)=> setQuantity(parseInt(e.target.value,10))} />
                <div className='inc qtybutton'onClick={handleIncrease} >+</div>
            </div>
 
            <div className='discount-code mb-2'>
                <input type='text' placeholder='Enter Discount Code' onChange={(e)=>setCoupon(e.target.value)}  />
            </div>
            {/*btn Section */}
            <button type='submit' className='lab-btn'>
                    <span>Add to Cart</span>
            </button>
            <Link to="/cart-page" className='lab-btn bg-primary'>
                <span>Check Out</span>
            </Link>
         </form>
       </div>
    </div>
  )
}

export default ProductDisplay
