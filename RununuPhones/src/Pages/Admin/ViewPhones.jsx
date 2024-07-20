import { useEffect, useState } from "react";
import { apiurl } from "../../utils/config";

function ViewPhones() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editPhone, setEditPhone] = useState(null);

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

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${apiurl}/api/phones/register/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (response.ok) {
        setPhones(phones.filter((current) => current.id !== id));
        alert("Phone deleted successfully");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdate = async (e, id) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiurl}/api/phones/register/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editPhone),
      });
      const data = await response.json();
      if (data.success === true) {
        setPhones(
          phones.map((current) =>
            current.id === id ? { ...current, ...editPhone } : current,
          ),
        );
        setEditPhone(null);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Phones at Store</h1>
      <div>
        {phones.map((current) => (
          <div key={current.id}>
            <div>
              <img src={current.phoneImage} alt={current.phoneName} />
            </div>
            <div>
              <h1>{current.phoneName}</h1>
              <p>{current.resolution}</p>
              <p>{current.processor}</p>
              <p>{current.ram}</p>
              <p>{current.storage}</p>
              <p>{current.connectivity}</p>
              <p>{current.battery}</p>
              <p>{current.price}</p>
            </div>
            <div>
              <button onClick={() => handleDelete(current.id)}>Delete</button>
              <button onClick={() => setEditPhone(current)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
      {editPhone && (
        <div>
          <h2>Edit Phone</h2>
          <form onSubmit={(e) => handleUpdate(e, editPhone.id)}>
            <input
              type="text"
              name="phoneImage"
              value={editPhone.phoneImage}
              onChange={(e) =>
                setEditPhone({ ...editPhone, phoneImage: e.target.value })
              }
            />
            <input
              type="text"
              name="phoneName"
              value={editPhone.phoneName}
              onChange={(e) =>
                setEditPhone({ ...editPhone, phoneName: e.target.value })
              }
            />
            <input
              type="text"
              name="resolution"
              value={editPhone.resolution}
              onChange={(e) =>
                setEditPhone({ ...editPhone, resolution: e.target.value })
              }
            />
            <input
              type="text"
              name="processor"
              value={editPhone.processor}
              onChange={(e) =>
                setEditPhone({ ...editPhone, processor: e.target.value })
              }
            />
            <input
              type="number"
              name="ram"
              value={editPhone.ram}
              onChange={(e) =>
                setEditPhone({ ...editPhone, ram: parseInt(e.target.value) })
              }
            />
            <input
              type="number"
              name="storage"
              value={editPhone.storage}
              onChange={(e) =>
                setEditPhone({
                  ...editPhone,
                  storage: parseInt(e.target.value),
                })
              }
            />
            <input
              type="text"
              name="connectivity"
              value={editPhone.connectivity}
              onChange={(e) =>
                setEditPhone({ ...editPhone, connectivity: e.target.value })
              }
            />
            <input
              type="number"
              name="battery"
              value={editPhone.battery}
              onChange={(e) =>
                setEditPhone({
                  ...editPhone,
                  battery: parseInt(e.target.value),
                })
              }
            />
            <input
              type="number"
              name="price"
              value={editPhone.price}
              onChange={(e) =>
                setEditPhone({ ...editPhone, price: parseInt(e.target.value) })
              }
            />
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ViewPhones;
