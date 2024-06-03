import React from 'react'
import blogList from "../../utilis/blogdata"
import { Link } from 'react-router-dom'
export default function Blog() {
  return (
    <div>
      <div className='blog-section padding-tb section-bg'>
        <div className='container'>
          <div className='section-wrapper'>
            <div className='row row-cols-1 row-cols-2 row-cols-xl-3 justify-content-center g-4'>
              {
                blogList.map((blog,i)=>(
                  <div key={i} className='col'>
                     <div className='post-item'>
                       <div className='post-inner'>
                         <div className='post-thumb'>
                            <Link to={`/blog`} > <img src={blog.imgUrl} alt='' /></Link>
                         </div>
                         <div className='post-content'>
                         <Link to={`/blog`} > <h4 >{blog.title}</h4></Link>
                          <div className='meta-post'>
                             <ul className='lab-ul'>
                               {
                                blog.metaList.map((val,i)=>(
                                  <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                ))
                               }
                             </ul>
                          </div>

                          <p>{blog.desc}</p>
                         </div>
                       </div>
                     </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
