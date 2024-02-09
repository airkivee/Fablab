import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setRole } from '../redux/action';
import { setAuth } from '../redux/action'; // Подключаем экшен setAuth
import { RedirectRules } from '../utils/redirectRules';

const useRedirect = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.role);
  const { pathname } = useLocation();
  const data = JSON.parse(localStorage.getItem("localST"));
  // Internal redirect logic
  const rule = RedirectRules.find((rule) => rule.route.path === pathname);
  const hasMissingProps = !role || !rule;
  const shouldRedirect = rule?.only && rule.only.indexOf(role) < 0;

  useEffect(() => {
    

    if (data) {
      dispatch(setAuth({
        token: data.token,
        password: data.password,
        username: data.username,
        userEmail: data.userEmail,
        isAuthenticated: data.isAuthenticated,
      }));
      dispatch(setRole(data.isAuthenticated)); // Добавляем действие setRole для установки роли
    }
  }, [dispatch]); // Указываем зависимость, чтобы избежать варнинга о пропущенной зависимости
 
  // if(data){return { redirect: '/user'}}
  if (hasMissingProps || shouldRedirect) {
    dispatch(setRole('default'))
    return { redirect: '/' }; // Dispatch the action to set the role to a default value
   
  }
 

  return {};
};

export default useRedirect;

