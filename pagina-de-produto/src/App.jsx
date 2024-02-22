import { useState } from 'react'
import style from './App.module.css'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { ProductDescription } from './components/Product-description'

//const [isOpen , setIsopen] = useState<Boolean>(false);

/* const posts = [
  {
    id:1, 
    imgsrc: './/assets/product-thumbnail1.jpg',
  },

  {
    id:2, 
    imgsrc: './/assets/product-thumbnail2.jpg',
  },

  {
    id:3, 
    imgsrc: './/assets/product-thumbnail3.jpg',
  },

  {
    id:4, 
    imgsrc: './/assets/product-thumbnail4.jpg',
  },

]*/

 export function App() {

  return (

    <div>
      <header>
        <Header/>
      </header>
     
      <article className={style.content}>
        <Modal/>
        <ProductDescription/>
      </article>

    </div>
    
    
 
    
  )
}

export default App
