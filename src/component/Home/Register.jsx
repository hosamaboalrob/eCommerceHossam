import React from 'react'
import { Form } from 'react-router-dom';

const subTitle ="save The Day";
const title = (
    <h2 className='title' >Join on Day Lobg Free Workshop for <b>Advance<span>Mastering</span></b>on Sales</h2>
)
const desc =" Limited Time Offer! HurrY Up";
const Register = () => {
  return (
    <section className='register-section padding-tb'>
        <div className='container'>
         <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
                <div className='col'>
                    <div className='section-header'>
                         <span className='subtitle'>{subTitle}</span>
                            {title}
                            <p>{desc}</p>
                    
                    </div>
                </div>
                <div className='col'>
                    <div className='section-wrapper'>
                            <h4>Register Now </h4>
                            <form className='register-form'>
                                <input type='text' name='name' placeholder='UserName' className='reg-input' />
                                <input type='email' name='email' placeholder='Email' className='reg-input' />
                                <input type='number' name='number' placeholder='Phone' className='reg-input' />
                                <button type='submit' className = 'lab-btn'> Register Now </button>
                            </form>
                 
                    </div>
                </div>
         </div>

        </div>
    </section>
  )
}

export default Register
