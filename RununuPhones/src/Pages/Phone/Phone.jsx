import { useEffect, useState } from "react";
import { apiurl } from "../../utils/config";
import { useCart } from "../Cart/Cartcontext.jsx";

function Phone() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart, isInCart } = useCart();

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await fetch(`${apiurl}/api/phones/register`);
        const data = await response.json();

        if (data.success === true) {
          setPhones(data.phoneDetail);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPhones();
  }, []);

  const handleAddToCart = (current) => {
    if (!isInCart(current.id)) {
      addToCart(current);
      alert("Successfully Added to Cart");
    } else {
      alert("Already Added to the Cart");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Phones Store</h1>
      <div>
        {phones.map((current) => (
          <div key={current.id}>
            <div>
              <img src={current.phoneImage} alt={current.phoneName} />
            </div>
            <div>
              <h1>{current.phoneName}</h1>
              <p>Resolution: {current.resolution}</p>
              <p>{current.processor}</p>
              <p>{current.ram}</p>
              <p>{current.storage}</p>
              <p>{current.connectivity}</p>
              <p>{current.battery}</p>
              <p>{current.price}</p>
            </div>
            <div>
              <button onClick={() => handleAddToCart(current)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Phone;
