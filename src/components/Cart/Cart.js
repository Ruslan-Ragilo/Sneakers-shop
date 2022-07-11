import styles from './Cart.module.scss';
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonPrimaryStyles from "../ButtonPrimary/ButtonPrimary.module.scss";
import EmptyCart from './emptyCart/emptyCart';


function ItemCart (props) {
  return (
    <div className={`${styles.cartItem} mr-10 mb-20 d-flex justify-between align-center`}>
    <img className={styles.sneakersImgInCart} src={`${props.imgUrl}`} alt=""/>
      <div className="mr-20 ml-20">
        <p className="mb-10">{props.title}</p>
        <div>
          <h5>{props.price} руб.</h5>
        </div>
      </div>
      <ButtonSecondary onClick={() => props.onRemoveItemCard(props.id)} clazz="btn" srcImg='/img/remove.svg' />
    </div>
  )
}

function Cart(props) {

  return ( 
      <div className={props.cartOpened ? styles.overlayDrawer + ' ' + styles.active : styles.overlayDrawer}>
      <div className={props.cartOpened ? `${styles.drawer} ${styles.active} d-flex flex-column justify-between` : `${styles.drawer} d-flex flex-column justify-between`}>
        <div className={styles.topDrawer}>
          <h3 className="mb-30 d-flex justify-between align-center">Корзина <ButtonSecondary onClick={props.cartOpen} clazz='btn' srcImg='/img/remove.svg' /></h3>
          <div className={`${styles.wrapperItemCart}`}>
            {props.itemsCart.length > 0 ? props.itemsCart.map((item, i) => {
              return (<ItemCart onRemoveItemCard={props.onRemoveItemCard} key={i} id={item.id} price={item.price} title={item.title} imgUrl={item.imgUrl}/>)
            }): <EmptyCart cartOpen={props.cartOpen} />}
          </div>
        </div>
        {props.itemsCart.length > 0 ? <div className={styles.bottomDrawer}>
          <ul className={styles.leaders}>
            <li><span>Итого:</span><span>21 498 руб. </span></li>
            <li><span>Налог 5%: </span><span>1074 руб. </span></li>
          </ul>
          <ButtonPrimary title={'Оформить заказ'} clazz={ButtonPrimaryStyles.btnPrimary + ' ' + ButtonPrimaryStyles.btnCartOrder} alt="arrow" clazzImg={ButtonPrimaryStyles.arrowRigth} srcImg={"/img/arrowRight.svg"}/>
        </div>: null}
      </div>
    </div>
    );
}

export default Cart;