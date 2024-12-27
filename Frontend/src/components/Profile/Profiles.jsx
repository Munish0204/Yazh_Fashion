// LoginPage.jsx
import React, { useState } from "react";
import "./Profile.css";





const Profiles = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://via.placeholder.com/150",
    orders: [
      { id: "ORD12345", date: "2024-12-10", total: "$120.00", status: "Delivered" },
      { id: "ORD12346", date: "2024-12-08", total: "$80.00", status: "Shipped" },
      { id: "ORD12347", date: "2024-12-05", total: "$150.00", status: "Cancelled" },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: user.name, email: user.email });

  const handleEditToggle = () => {
    setFormData({ name: user.name, email: user.email });
    setIsEditing(true);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setUser({ ...user, ...formData });
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="profile-container">
      <div className="profile-wrapper">
        <div className="profile-card">
          {isEditing ? (
            <form className="profile-form" onSubmit={handleSaveProfile}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-buttons">
                <button type="submit" className="save-button">
                  Save
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="profile-info">
              <img src={user.avatar} alt="User Avatar" className="avatar" />
              <div>
                <h2 className="user-name">{user.name}</h2>
                <p className="user-email">{user.email}</p>
              </div>
              <button className="edit-button" onClick={handleEditToggle}>
                Edit Profile
              </button>
            </div>
          )}
        </div>
        <div className="orders-card">
          <h3 className="section-title">Order History</h3>
          <div className="orders-list">
            {user.orders.map((order) => (
              <div key={order.id} className="order-item">
                <div>
                  <p className="order-id">Order ID: {order.id}</p>
                  <p className="order-date">Date: {order.date}</p>
                </div>
                <div>
                  <p className="order-total">Total: {order.total}</p>
                  <p
                    className={`order-status ${
                      order.status === "Delivered"
                        ? "status-delivered"
                        : order.status === "Shipped"
                        ? "status-shipped"
                        : "status-cancelled"
                    }`}
                  >
                    Status: {order.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
