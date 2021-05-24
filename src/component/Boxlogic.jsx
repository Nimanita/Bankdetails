import React, { useEffect } from 'react';
import {useState} from 'react';
import {useSelector , useDispatch } from 'react-redux';
import './App.css';

function Boxlogic(props) {
   
  const[boxcount,changebox] = useState();
  const[boxno,changeboxno] = useState(5);
  
    var page = useSelector(state=>state.page);
    var searchd = useSelector(state=>state.data);
   
  
    const[curpage,changecur] = useState(1);
    //const[datas,changebox] = useState();
   

   
 
    const dispatch = useDispatch()
  
    
    var length = searchd.length; 
  var q =1;

  const box = [];
     if(length<=page)
     {
        q = 1;
        r = 0;
         changeboxno(1);
     }
     else
     {
         var r = length%page;
         q = length/page;
         q = Math.floor(q);
         if(r!==0)
         {
            ++q;
         }
         if(q<=5)
         {
          changeboxno(q);
         } 
         else
         {
           q=5;
          changeboxno(5);
         }
     }
     console.log(length,q,r);
    for(var i=0;i<q;i++)
    {
      box.push( <button type="button" class="btn btn-info">{i+1}</button>);
    }
   changebox(box);
    return(
      {boxcount}
    );
  } 
 
 
  


export default Boxlogic;
