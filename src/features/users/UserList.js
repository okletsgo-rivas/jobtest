import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { removeUser, selectUsers } from './usersSlice';
import styles from "./UserList.module.css"

function UserList() {
  const navigate = useNavigate();
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  return (<div className={styles.UserList}>
    <div className={styles.users}>
      {users.length ? users.map((user, i) => (
        <div
          key={user.username}
          className={styles.user}
          style={{ borderColor: user.color }}>
          <span className={styles.name}>{user.username}</span>
          <button
            className="action"
            onClick={() => dispatch(removeUser(user))}>
            Delete
          </button>
        </div>
      )) : <span>No users added.</span>}
    </div>
    <div style={{ marginTop: 20 }}>
      <button type="button" className="link"
        onClick={() => navigate("/adduser")}>Add Users</button>
    </div>
  </div>)
}

export default UserList;