const initialState = {
    isAuthenticated: false,
    user: null,
    users: []
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        const user = state.users.find(user => user.email === action.payload.email && user.password === action.payload.password);
        if (user) {
          return { ...state, isAuthenticated: true, user };
        } else {
          alert('Invalid credentials');
          return state;
        }
      case 'REGISTER_USER':
        return { ...state, users: [...state.users, action.payload] };
      default:
        return state;
    }
  };
  
  export default authReducer;
  