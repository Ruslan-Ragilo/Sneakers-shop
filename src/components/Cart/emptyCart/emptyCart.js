import ButtonPrimary from "../../ButtonPrimary/ButtonPrimary";
import ButtonPrimarystyles from '../../ButtonPrimary/ButtonPrimary.module.scss';
import styles from './emptyCart.module.scss';

function EmptyCart(props) {
    return ( 
        <div className={`${styles.wrapperEmptyCart} d-flex flex-column align-center justify-center`}>
            <img src="/img/emptyBox.png" alt="empty box"/>
            <h3 className="mt-20">Корзина пустая</h3>
            <p className="text-center mt-10">Добавьте хотя бы одну пару <br /> кроссовок, чтобы сделать заказ.</p>
            <ButtonPrimary onClickBtn={props.cartOpen} title={'Вернуться назад'} clazz={'mt-40' + ' ' + ButtonPrimarystyles.btnPrimary + ' ' + ButtonPrimarystyles.btnCartOrder + ' ' + ButtonPrimarystyles.btnReturn} alt="arrow" clazzImg={ButtonPrimarystyles.arrowLeft} srcImg={"/img/arrowLeft.svg"} />
        </div>
    );
}

export default EmptyCart;