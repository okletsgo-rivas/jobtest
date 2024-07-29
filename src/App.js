import React from 'react';
import { Routes, Route } from "react-router-dom";

import AddUser from './features/users/AddUser';
import UserList from './features/users/UserList';
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="adduser" element={<AddUser />} />
        <Route path="users" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
