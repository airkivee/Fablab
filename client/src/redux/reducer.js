import { combineReducers } from 'redux';
import { Role } from '../utils/types';

// Начальное состояние для роли пользователя
const initialRoleState = Role.USER;

// Редьюсер для управления ролью пользователя
const roleReducer = (state = "default", action) => {
  switch (action.type) {
    case 'SET_ROLE':
      return action.payload;
    default:
      return state;
  }
};

// Начальное состояние для аутентификации
const initialAuthState = {
  token: null,
  userEmail: null,
  username: null,
  isAuthenticated: false,
};

// Редьюсер для управления состоянием аутентификации
const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return {
        ...state,
        token: action.token,
        userEmail: action.userEmail,
        username: action.username,
        isAuthenticated: action.isAuthenticated,
      };
    default:
      return state;
  }
};

// Объединение редьюсеров
const rootReducer = combineReducers({
  role: roleReducer,
  auth: authReducer,
});

export default rootReducer;
