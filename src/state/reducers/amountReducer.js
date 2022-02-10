const  Reducer = (state=10, action)=>{

    if(action.type==='add'){
        return state + action.payload;
    }
    if(action.type==='subtract'){
        return state - action.payload;
    }
    else{
        return state ;
    }
}
export default Reducer;