import {  Modal } from 'bootstrap'
import React, { useState } from 'react'
 const CheckOutPage = () => {
    const [show,setShow] =useState(false)
    const [activeTap ,setActiveTap]=useState('visa')

    //handle tap change
     const handleTapChange =(tabId)=>{
        setActiveTap(tabId)
     }
     const handelShow=()=> setShow(true);
     const handelClose=()=> setShow(false);
    return (
    <div className='modalCard'>
        <button variant='primary' className='py-2' onClick={handelShow} >Proceed to Checkout</button>
        
        <Modal show={show} onHide={handelClose} animation={false} className='modal fade' centered  >
        <div className='modal-dialog'>
            <h5 className='px-3 mb-3'> Select Your Payment Method </h5>
            <div className='modal-content' >
              <div className='modal-body' >
                <div className='tabs mt-3' >
                    <ul className='nav nav-tabs' id='myTab' role='tablist'>
                        <li className='nav-item' role='presentation'>
                        <a className={`nav-link ${activeTap === "visa" ? "active":""}`}
                        id='visa-tab' data-toggle="tab" role='tab'
                         aria-controls='visa' aria-selected={activeTap === "visa"}
                        onClick={()=>handleTapChange("visa")}
                         href='#visa'>
                         <img src='https://i.imgur.com/sB4jftM.png' width='80' alt='' />
                         </a>
                         </li>

                         <li className='nav-item' role='presentation'>
                        <a className={`nav-link ${activeTap === "paypal" ? "active":""}`}
                        id='paypal-tab' data-toggle="tab" role='tab'
                         aria-controls='paypal' aria-selected={activeTap === "paypal"}
                        onClick={()=>handleTapChange("paypal")}
                         href='#paypal'>
                         <img src='https://i.imgur.com/yK7EDD1.png' width='80' alt='' /></a>
                         </li>

                    </ul>
               
                </div>
              </div>

            </div>
        </div>

        </Modal>
  
    </div>
  )
}

export default CheckOutPage
