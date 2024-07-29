import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [{ username: "John", color: "Red" }, { username: "Rivas", color: "Orange" }],
  status: 'idle',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      const user = action.payload;
      const filteredUsers = state.users.filter(_ => _.username !== user.username);

      return {
        ...state,
        users: filteredUsers,
      }
    },
  },
});

export const { addUser, removeUser } = usersSlice.actions;

export const selectUsers = (state) => state.users.users;

export default usersSlice.reducer;
