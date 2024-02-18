import style from './Header.module.css'
import SneakerLogo from '../assets/logo.svg'
import Avatar from '..//assets/image-avatar.png'
import CartIcon from '..//assets/icon-cart.svg'

export function Header() {
return (
        <header className={style.header}>
        <img src={SneakerLogo} alt="" />
        <nav>
        <ul className={style.nav}>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
            <li>Collection</li>
      </ul>
        </nav>
     
        <div className={style.avatarAndCart}>
        <button className={style.cart}>
            <img src={CartIcon} alt="" />
         </button>
        <img className={style.avatar} src={Avatar} alt="" />
          
        </div>
        
    </header>

    
)
}