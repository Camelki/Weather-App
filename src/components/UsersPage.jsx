import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css'; 

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error('error', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Users</h1>
      <div className="row">
        {users.map(user => (
          <div key={user.id} className="use row g-1 col-lg-3 mb-4 justify-content-between">
            <div className="card user-card h-100">
              <div className="user-id">{user.id}</div>
              <div className="card-body d-flex align-items-center">
                <img 
                  src={user.image || 'path/to/default-avatar.png'} 
                  className="user-image img-thumbnail" 
                  alt={`${user.name}'s avatar`} 
                />
                <div className="user-info">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">
                    <strong>UserName:</strong> {user.username}<br/>
                    <strong>Email:</strong> {user.email}<br/>
                    <strong>City:</strong> {user.address.city}
                  </p>
                  <Link to={`/weather?cityName=${user.address.city}`} className="btn btn-primary">
                    Show weather
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
