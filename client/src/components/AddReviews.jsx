import React, { useState, useEffect, useCallback } from "react";
import { useHttp } from '../hooks/http.hook'
import Platzhalter from "../img/Platzhalter-1.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import AddProfile from "../components/AddProfile";
import axios from "axios";
import HtmlViewer from "./HtmlViewer"
const AddReviews = () => {
  const { loading, request, error, clearError } = useHttp();
  const [cardId, setCardId] = useState("");
  const [data, setData] = useState([]);
  const [addBtn, setAddBtn] = useState(false);
  const dataUser = JSON.parse(localStorage.getItem('localST'));
  
  const fetchData = async () => {
    try {
      const res = await axios.get(`/api/upload/showid/${dataUser.userId}`, {
        headers: { Authorization: `Bearer ${dataUser.token}` },
      });
      setData(res.data);
    } catch (error) {
      let message = error.message || "Error fetching data.";
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
  };

useEffect(() => {


  fetchData(); // Call the function immediately

}, [])

  // useEffect(() => {
  //   if (error) {
  //     toast.error(`${error}`, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //     clearError();
  //   }
  // }, [error, clearError]);

  const logoutHandler = () => {
    localStorage.removeItem("localST");
    window.location.reload();
  };

  const handleImageError = (e) => {
    e.target.src = Platzhalter;
  };

  return (
    <div className="row mt-5">
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
      <div className="col-md-4">
        <div className="mt-4 d-flex justify-content-center">
          <div className="rounded-circle">
            <img
              style={{
                height: "200px",
                width: "250px",
                borderRadius: "10px",
              }}
              src={`${window.location.protocol}//${window.location.host}/uploads/profile/${data?.imageSrc}`}
              className="rounded-circle"
              alt="Vacancy Thumbnail"
              onError={handleImageError}
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="text-center">
            <span>{dataUser.username}</span>
          </div>
        </div>
        <div className="btn red">
          <a href="/" onClick={(e) => logoutHandler(e)}>
            Выйти
          </a>
        </div>
      </div>
      <div className="col-md-8">
        {addBtn ? (
          <AddProfile path="/api/upload" _id={dataUser.userId} update={fetchData} setId={setCardId} />
        ) : (
          <div>
            <h2>резюме:</h2>
            <HtmlViewer htmlContent={data?.description} />
            {/* <p>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{data?.description}</p> */}
          </div>
        )}
        <p className="text-center">
          <button
            onClick={() => setAddBtn(!addBtn)}
            style={{ height: "50px", width: "50px", border: "none", padding: "0", backgroundColor: "#fff" }}
          >
            <IoIosAddCircleOutline style={{ fontSize: "3rem" }} />
          </button>{" "}
        </p>
      </div>
    </div>
  );
};

export default AddReviews;
