import React, { useCallback, useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useHttp } from '../hooks/http.hook';
import axios from "axios";
import { Loader } from '../components/Loader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserListItem from '../components/UserListItem';
// import { LinksList } from '../components/LinksList';

const SearchUser = () => {
//   const operatorRoomId = useParams().id;
  const { loading, request } = useHttp();
//   const auth = useContext(Context);
  const dataUser = JSON.parse(localStorage.getItem('localST'));
  const [data, setData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const registerHandler = async () => {
    try {
      const res = await axios.get(`/api/user/all`, {
        headers: { Authorization: `Bearer ${dataUser.token}` },
      });
      setData(res.data);
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

  useEffect(() => {
    registerHandler()
  }, []);
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = data.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(data)
    }
}

  if (loading) {
    return <Loader />;
  }

  return (
    <>
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
      <div className="container">
        {/* <div classNameName="d-flex">
          <input
            classNameName="form-control mb-4 mt-4 "
            id="tableSearch"
            type="text"
            placeholder="введите имя и фамилию"
            value={form}
            // onChange={changeHandler}
          />
          <input  type="submit"   id="tableSearch" classNameName='btn btn-primary mb-4 mt-4 pl-2'></input>
        </div>

        {!loading && <LinksList links={filteredVideoPath} />} */}
      <div className="input-group rounded mt-5">
        <input type="search" className="form-control " onChange={(e) => searchItems(e.target.value)} style={{"border":"solid 5px #DEE2E6" ,"borderRadius": "1rem  0px  0px 1rem"}}  placeholder="Search" />
        <span className="input-group-text border" style={{"border":"solid 10px #DEE2E6" ,"borderRadius": "  0  1rem   1rem 0"}} id="search-addon">
          <i className="fas fa-search" ></i>
        </span>
      </div>
      <table className="table">
            <thead>
              <tr>
                <th scope="col">#id</th>
                <th scope="col">user</th>
                <th scope="col">email</th>
                <th scope="col">role</th>
                <th scope="col">link</th>
              </tr>
            </thead>
            <tbody>
            {searchInput.length > 1 ? (
                    filteredResults.map((item) => <UserListItem props={item}/>)
                ) : (
                    data.map((item) => <UserListItem props={item}/>)
                )}
            </tbody>
          </table>
      </div>
    </>
  );
};

export default SearchUser;