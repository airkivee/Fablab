export const setRole = (role) => ({
    type: 'SET_ROLE',
    payload: role,
  });



export const setAuth = (auth) => ({
  type: 'SET_AUTH',
  token: auth.token || null,
  userEmail: auth.userEmail || null,
  username: auth.username || null,
  userId: auth.userId || null,
  isAuthenticated: auth.isAuthenticated || false,
  payload: auth,
});