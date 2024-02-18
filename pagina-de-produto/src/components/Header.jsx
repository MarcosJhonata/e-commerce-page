import style from './Header.module.css'
import SneakerLogo from '../assets/logo.svg'
import Avatar from '..//assets/image-avatar.png'
import CartIcon from '..//assets/icon-cart.svg'

export function Header() {
return (
        <header className={style.header}>
        <img src={SneakerLogo} alt="" />
        <button>Men</button>
        <button>Women</button>
        <button>About</button>
        <button>Contact</button>
        <button>Collection</button>
         <button className={style.cart}>
            <img src={CartIcon} alt="" />
         </button>
        <img className={style.avatar} src={Avatar} alt="" />
          
    </header>

    
)
}