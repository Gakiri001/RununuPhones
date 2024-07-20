import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { CartProvider,useCart } from './Cartcontext';
// import './CartDisplay.css';
// import Banner from '../../Components/Banner/Banner.jsx';
// import cartImage from './../../assets/banner3.jpg';
// import axios from 'axios';
import { useAuth } from '../../context/AuthContext';


const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
    const { user } = useAuth();

    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity > 0) {
            updateQuantity(itemId, newQuantity);
        }
    };

    const handlePlaceOrder = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/admin/orders', {
                userId: user.id,
                cartItems: cartItems,
                status: 'pending'
            });
            if (response.data.success) {
                clearCart();
                alert('Order placed successfully!');
            }
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    return (
        <>
            {/* <Banner title="Your Shopping Cart" backgroundImage={cartImage} /> */}
            <div className="cart-container">
                <h2>Shopping Cart</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id} className="product-info">
                                <td>
                                    <img src={item.image} alt={item.title} />
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>
                                </td>
                                <td>
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                    {item.quantity}
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                </td>
                                <td>Ksh.{(parseFloat(item.price) * (item.quantity)).toFixed(2)}</td>
                                <td>
                                    <button onClick={() => removeFromCart(item.id)}>
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="total">
                    <h3>Total: Ksh.{getTotalPrice()}</h3>
                    <button className='checkout-btn' onClick={handlePlaceOrder}>Buy Now</button>
                    <button onClick={clearCart} className='clear-btn'>Clear Cart</button>
                </div>
            </div>
        </>
    );
};

export default Cart;
export{CartProvider}