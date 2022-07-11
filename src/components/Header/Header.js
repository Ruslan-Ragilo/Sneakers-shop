import styles from './Header.module.scss';

function Header(props) {
    return ( 
        <header className="d-flex justify-between align-center p-40 mb-40">
            <div className="d-flex align-center">
            <img className="mr-10" src="/img/logo.png" width={40} height={40} alt="logo" />
            <div>
                <h3>REACT SNEAKERS</h3>
                <p>Магазин лучших кроссовок</p>
            </div>
            </div>
            <ul className="d-flex align-center">
            <li onClick={props.cartOpen} className="d-flex align-center mr-30 cu-p">
                <img className="mr-10" src="/img/cart.svg" alt="cart" />
                <span className="priceTotalCart">1205$</span>
            </li>
            <li className="d-flex align-center mr-30">
                <img src="/img/favorite.svg" alt="favorite" />
            </li>
            <li className="d-flex align-center mr-30">
                <img src="/img/profile.svg" alt="profile" />
            </li>
            </ul>
        </header>
    );
}

export default Header;