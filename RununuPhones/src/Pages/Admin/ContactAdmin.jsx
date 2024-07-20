import { useEffect, useState } from "react";
import { apiurl } from "../../utils/config";
import "./Admin.css";

function ContactAdmin() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editContact, setEditContact] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(`${apiurl}/api/subject/contact`);
        const data = await response.json();
        if (data.success) {
          setContacts(data.contacts);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${apiurl}/api/subject/contact/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (response.ok) {
        setContacts(contacts.filter((contact) => contact.id !== id));
        alert("Data Deleted");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (contact) => {
    setEditContact(contact);
  };

  const handleUpdate = async (updatedContact) => {
    try {
      const response = await fetch(
        `${apiurl}/api/subject/contact/${updatedContact.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedContact),
        },
      );
      const data = await response.json();
      if (data.success) {
        setContacts(
          contacts.map((contact) =>
            contact.id === updatedContact.id ? updatedContact : contact,
          ),
        );
        setEditContact(null);
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
      <h1>User Feedback and Review</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Explanation</th>
            {/* <th>Date</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.subject}</td>
              <td>{contact.explanation}</td>
              {/* <td>{new Date(contact.createdAt).toLocaleString()}</td> */}
              <td>
                {/* <button onClick={() => handleEdit(contact)}>Edit</button> */}
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editContact && (
        <div>
          <h2>Edit Contact</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(editContact);
            }}
          >
            <input
              type="text"
              name="name"
              value={editContact.name}
              onChange={(e) =>
                setEditContact({ ...editContact, name: e.target.value })
              }
            />
            <input
              type="email"
              name="email"
              value={editContact.email}
              onChange={(e) =>
                setEditContact({ ...editContact, email: e.target.value })
              }
            />
            <input
              type="text"
              name="subject"
              value={editContact.subject}
              onChange={(e) =>
                setEditContact({ ...editContact, subject: e.target.value })
              }
            />
            <textarea
              name="explanation"
              value={editContact.explanation}
              onChange={(e) =>
                setEditContact({ ...editContact, explanation: e.target.value })
              }
            ></textarea>
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ContactAdmin;
