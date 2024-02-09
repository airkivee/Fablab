import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import { Link } from "react-router-dom";
import { setRole } from "../../redux/action";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Draft from "../../components/Draft"

import AddReviews from "../../components/AddReviews";
import "react-toastify/dist/ReactToastify.css";
const Profile = ({ role, setRole, auth }) => {
  const [addBtn, setAddBtn] = useState(false)
  const logoutHandler = () => {
    // auth.logout();
    localStorage.removeItem("localST");
    window.location.reload();
  };
  return (
    <div className="container">

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
            <AddReviews />     
      <div className="row">   
        <div className="mt-4 col-md-8">

    </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  role: state.role,
  auth: state.auth,
});

const mapDispatchToProps = {
  setRole,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
