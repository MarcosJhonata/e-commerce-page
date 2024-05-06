import style from './App.module.css'
import { Header } from './components/Header'
import { Gallery } from './components/Gallery'
import { ProductDescription } from './components/Product-description'

 export function App() {

  return (

    <div>
        <Header/>
      <article className={style.content}>
        <Gallery/>
        <ProductDescription/>
      </article>

    </div>
    
    
 
    
  )
}

export default App
