import React,{useEffect , useContext ,useCallback , useState} from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loading from "../img/liquid-loading.gif"
import { useHttp } from "../hooks/http.hook";
import { Context } from "../context/Context";


const UserList = (props) => {
  const { request } = useHttp();
  const [data, setData] = useState([]);
  const [searchEmail, setSearchEmail] = useState("");
  console.log(data);
const { token } = useContext(Context);
const fetchLinks = useCallback(async () => {
  try {
    const fetched = await request("/api/user/all", "GET", null, {
      Authorization: `Bearer ${token}`,
    });
    setData(fetched);
  } catch (error) {
    toast.error(`${error}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}, [token, request]);

useEffect(() => {
  fetchLinks();
}, [fetchLinks]);
const deleteUser = useCallback(async (id) => {
  try {
    const data = request(`/api/user/delete/${id}`, 'DELETE', null, {
      Authorization: `Bearer ${token}`
    });
    data.then(({ message: value }) => {
      toast.info(`${value}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    setTimeout(() => {
      fetchLinks();
    }, 500);
    });
  } catch (error) {
    toast.error(`${error}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}, [token, request]);

useEffect(() => {
  deleteUser();
}, [deleteUser]);
const handleSearchEmailChange = (event) => {
  setSearchEmail(event.target.value);
};

  return (
    <div className="container  bg-light rounded-lg p-3">
      <h2>User List</h2>
      <input
    type="text"
    className="form-control mb-3"
    placeholder="Поиск по email"
    value={searchEmail}
    onChange={handleSearchEmailChange}
  />
      <ToastContainer
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
      {data[0]?data
        .filter((user) => user.email.includes(searchEmail))
        .map((user, index) => (
        <div className="row justify-content-between  text-white p-3 rounded-lg m-2 " style={{"backgroundColor":"#E1E1E2EB"}}>
        <p className="text-info" key={index}>
          
          name: <span className="text-success">
            {user.username}
          </span> email: <button className="btn-info" onClick={()=>{props.emailFormId(user.email)}}>{user.email} </button>
          <span> {new Date(user.date).toLocaleDateString()}</span> 
        </p>
        <div className=""><button className="btn btn-danger mr-0" onClick={()=>{deleteUser(user._id)}}>удалить</button></div>
        </div>
      )):<div style={{"height":"500px"}}> <img src={loading} alt="" /></div>
    }
    </div>
  );
};

export default UserList;
