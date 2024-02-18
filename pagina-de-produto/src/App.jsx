import style from './App.module.css'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { ProductDescription } from './components/Product-description'


function App() {

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
