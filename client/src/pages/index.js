import React,{useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import { RedirectHandler } from "../components/RedirectHandler";
import Home from './Home';
import Manager from './role/Manager';
import Admin from './role/Admin';
import AdminManager from './role/AdminManager';
import  AuthPage  from './AuthPage';
import Profile from './role/Profile';
import SearchUser from './SearchUser';
import  ProfileViwer  from './ProfileViwer';
import Footer from '../components/Footer';

const AppRouter = () => {


  return (
    <Router>
      <RedirectHandler />

      <Header />

      <Routes>
        <Route path="/manager" element={<Manager />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-manager" element={<AdminManager />} />
        <Route path="/authPage" element={<AuthPage />} />
        <Route path="/user" element={<Profile />} />
        <Route path="/user-viwer/?" element={<ProfileViwer />} />
        <Route path="/search" element={<SearchUser />} />
         <Route path="/" element={<Home />} />
      </Routes>

      <Footer/>
    </Router>
  );
};

export default AppRouter;
