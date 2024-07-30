import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { addUser } from './usersSlice';
import styles from "./AddUser.module.css"
import Select from '../../ui/Select';

function AddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const colorsList = ["Red", "Orange", "Blue", "Purple"];

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const username = formData.get("username");
    const color = formData.get("color");

    dispatch(addUser({ username, color }));

    form.reset();
  }

  return (<div className={styles.AddUser}>
    <form onSubmit={handleSubmit}>
      <div className="input">
        <label>
          User name
          <input
            placeholder="Enter user name"
            name="username" />
        </label>
      </div>
      <div className="input">
        <label>
          Color
          <Select defaultValue={colorsList[0]} name="color">
            {colorsList.map(color =>
              (<option key={color} value={color}>{color}</option>))}
          </Select>
        </label>
      </div>
      <div style={{ marginTop: 40 }}>
        <button type="submit" className="primary" style={{ marginBottom: 20 }}>Submit</button>
        <button type="button" className="link"
          onClick={() => navigate("/users")}>View User List</button>
      </div>
    </form >
  </div >)
}

export default AddUser;