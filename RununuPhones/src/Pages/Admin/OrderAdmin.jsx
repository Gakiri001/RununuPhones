import { useEffect, useState } from "react";
import { apiurl } from "../../utils/config";
import "./Admin.css";

function OrderAdmin() {
  const [orders, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`${apiurl}/api/register/order`);
        const data = await response.json();
        console.log("data", data);
        if (data.success === true) {
          setOrder(data.data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${apiurl}/api/register/order/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (response.ok) {
        setOrder(orders.filter((current) => current.id));
        alert("Data Deleted, refresh the page");
      } else {
        setError(data.message);
      }
    } catch (err) {}
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div>
        <h1>Order</h1>
        <table>
          <tr>
            <th>Pick up</th>
            <th>Delivery Date</th>
          </tr>
          <tbody>
            {orders.map((current) => (
              <tr key={current.id}>
                <td>{current.pickup}</td>
                <td>{current.deliveryDate}</td>
                <td>
                  <button onClick={() => handleDelete(current.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      ;
    </>
  );
}
export default OrderAdmin;
