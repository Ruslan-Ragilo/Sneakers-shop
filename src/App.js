import Card from "./components/Card/Card";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Spinner from "./components/Spinner/Spinner";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [cartOpened, setCartOpened] = useState(false),
    [itemsCart, setItemsCart] = useState([]),
    [searchValue, setSearchValue] = useState([]),
    [items, setItems] = useState(null);

  const addTocard = (obj) => {
    if(obj.isAddedCard) {
      setItemsCart((prev) => [...prev, obj]);
      axios.post('https://62c6d8832b03e73a58d88201.mockapi.io/cart', obj)
    }
  }

  const onRemoveItemCard = (id) => {
    axios.delete(`https://62c6d8832b03e73a58d88201.mockapi.io/cart/${id}`)
    .then(() => {
      setItemsCart(itemsCart.filter(el => id !== el.id));
    })
  }

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value)
  }
    



  useEffect(() => {
    axios.get('https://62c6d8832b03e73a58d88201.mockapi.io/items')
    .then(res => {
      setItems(res.data);
    });
    axios.get('https://62c6d8832b03e73a58d88201.mockapi.io/cart')
    .then(res => {
      setItemsCart(res.data);
    })
  }, []);

  return (
    <div className="wrapper clear pb-40">
      <Cart onRemoveItemCard={onRemoveItemCard} itemsCart={itemsCart} cartOpened={cartOpened} cartOpen={() => setCartOpened(false)}/>
      <Header cartOpen={() => setCartOpened(true)}/>
      <hr className="lineBottom"></hr>
      <div className="content p-40">
          <div className="d-flex justify-between align-center mb-40">
            <h1>{searchValue ? `Поиск по: ${searchValue}` : 'Все кроссовки'}</h1>
            <div className="d-flex align-center wrapperSearch">
              <img className="mr-10" src="/img/search.svg"/>
              <input onChange={onChangeSearch} value={searchValue} placeholder="Поиск..." />
            </div>
          </div>
          <div className="d-flex justify-between flex-wrap">
            {items ? items.filter(item => item.title.toLowerCase().includes(searchValue)).map((el,i) => {
              return <Card addTocard={addTocard} key={i} title={el.title} imgUrl={`${el.imgUrl}${i+1}.png`} price={el.price} />
            }) : <Spinner />}
          </div>
      </div>
    </div>
  );
}

export default App;
