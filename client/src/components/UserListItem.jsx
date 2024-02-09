import React from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UserListItem = ({ props }) => {
  const dataUser = JSON.parse(localStorage.getItem('localST'));
  const registerHandler = async (e) => {
    try {
      const res = await axios.delete(`/api/user/delete/${e}`, {
        headers: { Authorization: `Bearer ${dataUser.token}` },
      });
      toast.info(`пользователь удален`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      let message = error.message;
      toast.error(`${message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
if (dataUser.username == "admin@gmail.com") {
  return (
    <>     <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
    {props.email == "admin@gmail.com" ? "" : <tr>
      <th scope="row">{props.id}</th>
      <td>{props.username}</td>
      <td>{props.email}</td>
      <td>{props.role == "user" ? "студет" : "преподаватель"}</td>
      <td> <button onClick={()=>{registerHandler(props.id)}}  className=' btn-sm btn btn-danger mr-2' > удалить </button> <Link to={`/user-viwer/?${props.id} `} className=' btn-sm btn btn-info' > посмотреть</Link></td>
    </tr>}
    </>
    )
}
  return (
    <>{props.email == "admin@gmail.com" ? "" : <tr>
      <th scope="row">{props.id}</th>
      <td>{props.username}</td>
      <td>{props.email}</td>
      <td>{props.role == "user" ? "студет" : "преподаватель"}</td>
      <td> <Link to={`/user-viwer/?${props.id} `} className=' btn-sm btn btn-info' > посмотреть</Link> </td>
    </tr>}


    </>
  )
}

export default UserListItem;