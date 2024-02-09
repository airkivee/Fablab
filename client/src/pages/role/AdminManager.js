import React from 'react';
import { connect } from 'react-redux';
import { setRole } from '../../redux/action';

const AdminManager = ({ role, setRole }) => {
  // Your component logic here

  return (
    <p>This page is visible for manager and admin</p>
  );
};

const mapStateToProps = (state) => ({
  role: state.role,
});

const mapDispatchToProps = {
  setRole,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminManager);