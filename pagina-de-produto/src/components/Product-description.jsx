import style from './Product-description.module.css'

export function ProductDescription () {
    return (
        <div className={style.description}>
            <h4 className={style.company}>Sneaker Company</h4> 
            <h1 className={style.model}>Fall Limited Edition Sneakers </h1>
            <p className={style.content}>These low-profile sneakers are your perfect casual wear 
                companion. Featuring a durable rubber outer sole, theyll
                withstand everything the weather can offer.
            </p>
            <h2 className={style.prize}>$125.00</h2>
            <h6 className={style.discount}>$250.00</h6>
        </div>

    )
}