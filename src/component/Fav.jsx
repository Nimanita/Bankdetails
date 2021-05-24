import React from 'react';

import './App.css';
import Menubar from './Menubar';
import { Table } from 'react-bootstrap';
function Fav() {
    var f= JSON.parse(localStorage.getItem("favourites"));
    var l =f.length;
    f = f.slice(1,l);
if(l<=1)
{
    return(
        <h1>No banks marked as favourite!!!</h1>
    );
}
  return (
    <div className="App">
      <Menubar/>
      <div class="tablediv">
<Table striped bordered hover variant="dark">
<thead>
  <tr>
    <th>#</th>
    <th>Name</th>
    <th>IFSC</th>
    <th>Branch</th>
    
    <th>Address</th>
    <th>State</th>
  
  </tr>
</thead>
<tbody>
 
  {f && f.map((data,index) => (
      <tr>
      <td>{index+1}</td>
      <td>{data.bank_name}</td>
      <td>{data.ifsc}</td>
      <td>{data.branch}</td>
      <td>{data.address}</td>
      <td>{data.state}</td>
     
    </tr>
  ))}


 

  
</tbody>
</Table>
</div>
    </div>
  );
}

export default Fav;
