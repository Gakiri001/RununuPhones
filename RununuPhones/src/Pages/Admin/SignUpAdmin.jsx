import { useEffect, useState } from "react";
import { apiurl } from "../../utils/config";
import "./Admin.css";

function SignUpAdmin() {
  const [signup, setSignup] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${apiurl}/api/users/register`);
        const data = await response.json();
        console.log(data);

        if (data.success === true) {
          setSignup(data.users);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${apiurl}/api/users/register/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (response.ok) {
        setSignup(signup.filter((register) => register.id !== id));
        alert("Data Deleted");
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
    <div className="body">
      <h1>BebaBeba Users</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {signup.map((register) => (
            <tr key={register.id}>
              <td>{register.firstname}</td>
              <td>{register.lastname}</td>
              <td>{register.email}</td>
              <td>{register.phoneNumber}</td>
              <td>
                <button onClick={() => handleDelete(register.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SignUpAdmin;
