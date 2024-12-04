export const loginUser = (email, password) => {
    return { type: 'LOGIN_USER', payload: { email, password } };
  };
  
  export const registerUser = (user) => {
    return { type: 'REGISTER_USER', payload: user };
  };
  