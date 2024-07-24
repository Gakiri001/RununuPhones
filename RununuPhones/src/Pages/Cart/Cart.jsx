import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { CartProvider, useCart } from "./Cartcontext";
import { useAuth } from "../../context/AuthContext";
import { Formik, useFormik } from "formik";
import { apiurl } from "../../utils/config";
import "./Cart.css"


const Cart = () => {
  const { user } = useAuth();
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
  } = useCart();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(itemId, newQuantity);
    }
  };

  // const handleSubmit = async (formValues) => {
  //   try {
  //     setLoading(true);
  //     setError(null);

  //     const userId = user.id; // Assuming user.id is available in your AuthContext

  //     // Fetch user details
  //     const userResponse = await fetch(`${apiurl}/api/user/${userId}`);
  //     const userData = await userResponse.json();

  //     if (!userResponse.ok) {
  //       throw new Error(userData.message);
  //     }

  //     // Fetch phone details
  //     const phoneData = cartItems.map(item => ({
  //       phoneName: item.phoneName,
  //       price: item.price,
  //     }));

  //     const orderData = {
  //       firstname: userData.firstname,
  //       email: userData.email,
  //       pickup: formValues.pickup,
  //       deliveryDate: formValues.deliveryDate,
  //       phoneDetails: phoneData,
  //     };

  //     const response = await fetch(`${apiurl}/api/register/order`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(orderData),
  //     });

  //     const data = await response.json();
  //     console.log(data);
  //     if (data.success) {
  //       alert("Order placed successfully");
  //     } else {
  //       setError(data.message);
  //     }
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (formValues) => {
    console.log("Product to buy")
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(`${apiurl}/api/register/order`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      },)
      const data = await response.json();
      console.log("response", response)
      console.log("data", data)
      if (!response.ok) {
        throw new Error("order failed");
      }
      alert("order placed")
    } 
    catch (err) {
      setError(err.message);
    }
    finally {
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      pickup: "",
      deliveryDate: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <div className="Cart">
      <h1>Phone cart</h1>
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
            <tr key={item.id}>
              <td className="phonedetails">
                <img src={item.phoneImage} alt="" />
                <p>{item.phoneName}</p>
                <p>{item.price}</p>
              </td>
              <td>
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
                <span>{item.quantity}</span>
              </td>
              <td>
                Ksh. {(parseFloat(item.price) * item.quantity).toFixed(2)}{" "}
              </td>
              <td>
                <button onClick={() => removeFromCart(item.id)}>
                  <FaTrashAlt />
                </button>
              </td>
              {/* <td><button onClick={handleSubmit}>buyyy</button></td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Total: ksh.{getTotalPrice()}</h3>
        <button onClick={handleSubmit}>Buy Now</button>
        <button onClick={clearCart}>Clear cart</button>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="pickup"
          placeholder="Enter the pick up location"
          value={formik.values.pickup}
          onChange={formik.handleChange}
        />
        <input
          type="date"
          name="deliveryDate"
          placeholder="Enter the delivery date"
          value={formik.values.deliveryDate}
          onChange={formik.handleChange}
        />
        <input className="submit" type="submit" value="Place Order"/>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Cart;
export { CartProvider };
