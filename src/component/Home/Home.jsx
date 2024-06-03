import React from 'react'
import Banner from './Banner'
import HomeCtegory from './HomeCtegory'
import CategoryShow from './CategoryShow'
import Register from './Register'
import About from '../About/About'

export default function Home() {
  return (
    <div>
       <Banner/>
       <HomeCtegory/>
       <CategoryShow/>
       <Register />
       <About/>
    </div>
  )
}
