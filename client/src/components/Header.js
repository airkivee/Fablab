// import React, { useState, useEffect } from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import { connect } from "react-redux";
// import { NavLink, useNavigate } from "react-router-dom";
// // import { Context } from '../context/Context'
// const Header = ({ role, auth }) => {
//   return (
//     <>
//       <Navbar
//         variant="dark"
//         expand="lg"
//         sticky="top"
//         style={{ background: "#34469D" }}
//       >
//         <div className="container">
//           <Navbar.Brand href="/">Fab lab</Navbar.Brand>
//           <Navbar.Toggle/>
//           <Navbar.Collapse
//             id="basic-navbar-nav "
//             className="d-flex justify-content-end"
//           >
//             <Nav className="mr-5 d-flex">
//               {/* {state.adm ? (
//                 <NavLink className="nav-link" to={"/admin"}>
//                   admin
//                 </NavLink>
//               ) : (
//                 ""
//               )} */}
//               <NavLink className="nav-link" to={"/"}>
//                 Главная
//               </NavLink>
//               {auth.username ? (
//                 <NavLink className="nav-link" to={"/search"}>
//                   поиск студента
//                 </NavLink>
//               ) : (
//                 ""
//               )}

//               {/* {state.authenticated ? (
//                 <NavLink className="nav-link" to={"/tests"}>
//                   Тесты
//                 </NavLink>
//               ) : (
//                 ""
//               )} */}

//               {auth.username ? (
//                 <NavLink className="nav-link" to={"/user"}>
//                   {auth.username}
//                 </NavLink>
//               ) : (
//                 <NavLink className="nav-link" to={"/authPage"}>
//                   Вход
//                 </NavLink>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </div>
//       </Navbar>
//     </>
//   );
// };



import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from "react-router-dom";

function Header({ role, auth }) {
  return (
    <div style={{ background: "#34469D" }}> 
      

    <Navbar variant="dark" expand="lg" >
      <Container style={{ background: "#34469D" }}>
        <Navbar.Brand href="/">Fab lab</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{"display":"flax" , "justifyContent":"end"}}>
        <Nav >
        <NavLink className="nav-link" to={"/"}>
                Главная
              </NavLink>
              {auth.username ? (
                <NavLink className="nav-link" to={"/search"}>
                  поиск студента
                </NavLink>
              ) : (
                ""
              )}



              {auth.username ? (
                <NavLink className="nav-link" to={"/user"}>
                  {auth.username}
                </NavLink>
              ) : (
                <NavLink className="nav-link" to={"/authPage"}>
                  Вход
                </NavLink>
              )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  role: state.role,
  auth: state.auth,
});

export default connect(mapStateToProps)(Header);
