

const PAGENUMBER = 'PAGENUMBER'
const SEARCHDATA = 'SEARCHDATA'
var storedNames = JSON.parse(localStorage.getItem("bankdata"));
const initialState = {

  page : 5,
  data : storedNames
}
const bankdatareducer = (state = initialState,action)=>{
  console.log("action.type",action.type);
  console.log("action",action);
  console.log("state",state);
switch(action.type){
  case PAGENUMBER :return{
     
    ...state ,
     page : action.pages
    
  }
  case SEARCHDATA :return{
      ...state ,
      data : action.data
  }

 
  default : return state
}

}

export default bankdatareducer;