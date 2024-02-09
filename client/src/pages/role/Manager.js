import React from 'react';
import { connect } from 'react-redux';
import { setRole } from '../../redux/action';

const Manager = ({ role, setRole }) => {
  return (
<div className='container'>
  <div className='row'>
    <div className='col-md-4'>
       <div className='mt-4 d-flex justify-content-center'>
         <div className='rounded-circle ' style={{"backgroundColor":"red" , "width":"150px" , "height":"150px"}}>

         </div>
         </div>
         <div className='mt-4'>
            <div className='text-center'>
               <span>Нуска Нурланова</span>
            </div>
         </div>
    </div>
    <div className='mt-4 col-md-8'>
      <p>
        lorem Ipsum is simply dummy, Lorem Ipsum
        lorem Ipsum is simply dummy, Lorem Ipsum
        lorem Ipsum is simply dummy, Lorem Ipsum      
        lorem Ipsum is simply dummy, Lorem Ipsum
        lorem Ipsum is simply dummy, Lorem Ipsum
        lorem Ipsum is simply dummy, Lorem Ipsum
        lorem Ipsum is simply dummy, Lorem Ipsum

        lorem Ipsum is simply dummy, Lorem Ipsum
        </p>          
        <p>
        lorem Ipsum is simply dummy, Lorem Ipsum
        lorem Ipsum is simply dummy, Lorem Ipsum
        lorem Ipsum is simply dummy, Lorem Ipsum      
        lorem Ipsum is simply dummy, Lorem Ipsum
        lorem Ipsum is simply dummy, Lorem Ipsum
        lorem Ipsum is simply dummy, Lorem Ipsum
        lorem Ipsum is simply dummy, Lorem Ipsum

        lorem Ipsum is simply dummy, Lorem Ipsum
        </p> 

        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Предмет</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        <div className='mt-4'>
          <div className='border border-2 rounded p-2'>
            spa
          </div>
        </div> 
    </div>
  </div>
</div>
  );
};

const mapStateToProps = (state) => ({
  role: state.role,
});

const mapDispatchToProps = {
  setRole,
};

export default connect(mapStateToProps, mapDispatchToProps)(Manager);   