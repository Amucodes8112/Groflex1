import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers';
import { addToCart, updateQuantity } from './redux/actions';
import ItemList from './components/ItemList';
import Cart from './components/Cart';
import './App.css';

const store = createStore(reducer);

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity(id, quantity));
  };
  
  const handleDeleteItem = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: id });
  };

  return (
    <div>
      <h2>Home</h2>
      <ItemList
        items={items}
        onAddToCart={handleAddToCart}
        onQuantityChange={handleQuantityChange}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
};

const MyCart = () => {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-cart">My Cart</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-cart" element={<MyCart />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
