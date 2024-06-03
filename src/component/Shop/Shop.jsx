 import React,{useState} from 'react'
import Data from '../../products.json'
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';
const showResults="showing 01-12 of 139 Results";


const Shop = () => {

  const [GridList,setGridList]=useState(true);
  const [products,setProducts]=useState(Data);

  //pagination
  const [currentPage,setCurrentPage]=useState(1);
  const productsPerPage=12;
  const indexOfLastProduct=currentPage * productsPerPage
  const indexOfFirstProduct=indexOfLastProduct-productsPerPage;
  const currentProduct =products.slice(indexOfFirstProduct,indexOfLastProduct)
  
  //fucnctio change the current page
    const paginate =(pageNumber)=>{
      setCurrentPage(pageNumber)
    }
    //filter product
    const [selectCategory,setSelectCategory]=useState("All")
    const menuItems = [...new Set(Data.map((val)=>val.category))]
    const filterItem=(currentCate)=>{
        const newItem = Data.filter((newVal)=>{
          return newVal.category===currentCate;
    })
    setSelectCategory(currentCate);
    setProducts(newItem)
    }
  return (
    <div className='shop-page padding-tb'>
      <div className='container'>
        <div className='row justify-contnet-center'>
            <div className='col-lg-8 col-12'>
                <article>
                  <div className='shop-title d-flex flex-wrap justify-contnet-between'>
                      <p>{showResults}</p>
                  
                       <div className={ `product-view-mode ${GridList ? "gridActive" : "listActive"}` }>
                       <a className='grid' onClick={()=> setGridList(!GridList)} >
                            <i className='icofont-ghost' ></i>
                          </a>
                          <a className='grid' onClick={()=> setGridList(!GridList)} >
                            <i className='icofont-listine-dost' ></i>
                          </a>
                           
                       </div>
                  </div>
                  <div >
                      <ProductCard GridList={GridList} products={currentProduct} />
                  </div> 

                  <Pagination 
                    productsPerPage = {productsPerPage}
                    totalProducts={products.length}
                    paginate={paginate}
                    activePage={currentPage}
                  />
                </article>
            </div>
            <div className='col-lg-4 col-12'>
                <aside>
                       <Search products={products} GridList={GridList}/>
                        <ShopCategory
                         filterItem={filterItem} 
                          setItem={setProducts}
                          menuItems={menuItems}
                          setProducts={setProducts}
                          selectCategory={selectCategory}

                        />
                </aside>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
