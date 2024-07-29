// A mock function to mimic making an async request for data
export function fetchUsers(users = []) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: users }), 500)
  );
}
