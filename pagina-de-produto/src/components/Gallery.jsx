import style from './Gallery.module.css'
import { useState } from 'react'
import img1 from '..//assets/product-thumbnail1.jpg'
import img2 from '..//assets/product-thumbnail2.jpg'
import img3 from '..//assets/product-thumbnail3.jpg'
import img4 from '..//assets/product-thumbnail4.jpg'


export function Gallery() {
 const images = [
  {
    id:1, 
    imgSrc: img1,
  },

  {
    id:2, 
    imgSrc: img2,
  },

  {
    id:3, 
    imgSrc: img3,
  },

  {
    id:4, 
    imgSrc: img4,
  },

]   
    const [model, setModel] = useState(false);
    const [tempimgSrc , setTempImgSrc] = useState('');
    const getImg= (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
        <div className={model? "{style.modelopen}" : "{style.model}"}>
            <img src={tempimgSrc}/>
        </div>
        <div className={style.gallery}>
            {images.map((item,index)=>{

                return(
                    <div className={style.pics} key={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc}/>
                    </div>
                )
            })}
        </div>
        </>
    )
    }