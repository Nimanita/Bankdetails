import React from 'react';
import {useState} from 'react';
import {useSelector , useDispatch } from 'react-redux';
import {useHistory } from 'react-router-dom';
import './App.css';
import  Pagenumber  from './redux/bankdata/Paging';
import  Searchdata  from './redux/bankdata/Searching';
function Menubar() {
  let history = useHistory();
  const dispatch = useDispatch();
  var data = JSON.parse(localStorage.getItem("bankdata"));
  const[pagenumber,setpage] = useState(5);
function search(x){
 // console.log(x.toLowerCase())
  const searchData = data.map((data) => {
    if  ((data.ifsc.toLowerCase().indexOf(x.toLowerCase()) >= 0)  || (data.bank_name.toLowerCase().indexOf(x.toLowerCase()) >= 0) || 
    (data.address.toLowerCase().indexOf(x.toLowerCase()) >= 0) || (data.branch.toLowerCase().indexOf(x.toLowerCase()) >= 0) || (data.city.toLowerCase().indexOf(x.toLowerCase()) >= 0) || 
    (data.district.toLowerCase().indexOf(x.toLowerCase()) >= 0) ||  (data.state.toLowerCase().indexOf(x.toLowerCase()) >= 0) )
             //console.log(data.ifsc) ;
        return data;
    return null;
});
var searchfilter = searchData.filter(x => x !== null);
//console.log("reqire",search);
dispatch(Searchdata(searchfilter));
localStorage.setItem("searchdata", JSON.stringify(searchData));
}
function handleChange(e){
  console.log(e.target.value);
  search(e.target.value)
}
function pagechosen(n){
  console.log(n);
  setpage(n);
  dispatch(Pagenumber(n));
}
function Favourite(){
  history.push('/fav');
}
  return (
    <div className="menubar">
        <div class="row">
            <div class="col1">
             Search
            <input placeholder="Search" onChange={handleChange}/>
            </div>
            <div class="col2">
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {pagenumber}
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#" value="5" onClick={()=>pagechosen(5)}>5</a>
    <a class="dropdown-item" href="#" onClick={()=>pagechosen(10)}>10</a>
    <a class="dropdown-item" href="#" onClick={()=>pagechosen(20)}>20</a>
    <a class="dropdown-item" href="#" onClick={()=>pagechosen(50)}>50</a>
  </div>
</div>
            </div>
            <div class="col">
              <a onClick={()=>Favourite()}>My Favourite</a>
            </div>
        </div>
         
    </div>
  );
}

export default Menubar;
