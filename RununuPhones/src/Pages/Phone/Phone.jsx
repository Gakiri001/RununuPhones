import { useEffect, useState } from "react";
import { apiurl } from "../../utils/config";
import { useCart } from "../Cart/Cartcontext.jsx";
import { PiEngineBold } from "react-icons/pi";
import { FaGear } from "react-icons/fa6";
import { FaStoreAlt } from "react-icons/fa";
import { FaStreetView } from "react-icons/fa";
import { GrConnectivity } from "react-icons/gr";
import { FaBatteryFull } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import "./Phone.css";

function Phone() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartitemSelected, setCartitemSelected] = useState([]);

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
      console.log(current);
      alert("Successfully Added to Cart");
    } else {
      alert("Already Added to the Cart");
    }

    // const itemIndex = cartitemSelected.indexOf(currentId)

    // if(itemIndex !== -1){
    //   console.log("Item Already Added")
    //   console.log(cartitemSelected,"Selected")
    // }
    // else{

    //   setCartitemSelected(pre=> [...pre,currentId])
    //   console.log(cartitemSelected,"SElected")
    // }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="Phone">
      <h1>Phones Store</h1>
      <div className="PhoneWrapper">
        {phones.map((current) => (
          <div className="Phonecard" key={current.id}>
            <div className="phoneimage">
              <img src={current.phoneImage} alt={current.phoneName} />
            </div>
            <div className="phoneDetail">
              <h2>{current.phoneName}</h2>
              <p>
                {" "}
                <span>
                  <FaStreetView />
                </span>{" "}
                {current.resolution} Resolution
              </p>
              <p>
                {" "}
                <span>
                  <PiEngineBold />
                </span>{" "}
                {current.processor} Processor
              </p>
              <p>
                {" "}
                <span>
                  <FaGear />
                </span>{" "}
                {current.ram} RAM
              </p>
              <p>
                {" "}
                <span>
                  <FaStoreAlt />
                </span>{" "}
                {current.storage} GB
              </p>
              <p>
                {" "}
                <span>
                  <GrConnectivity />
                </span>{" "}
                {current.connectivity}
              </p>
              <p>
                {" "}
                <span>
                  <FaBatteryFull />
                </span>{" "}
                {current.battery} Battery Life
              </p>
              <p>
                {" "}
                <span>
                  <FaMoneyBill />
                </span>{" "}
                Ksh.{current.price}
              </p>
            </div>
            <div className="btnBuy">
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
