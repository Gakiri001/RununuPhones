import { useEffect, useState } from "react";
import { apiurl } from "../../utils/config";

function Phone() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
              <button>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Phone;
