import react from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

const ChangeBtn = ()=>{

    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators, dispatch);

    return(
    <div className="container" style={{padding: 10 }}>
        <h2>Onclick change Amount</h2>
        <button onClick={()=>{actions.AddMoney(100)}}>Add</button>
        <button onClick={()=>{actions.SubtractMoney(100)}}>Subtract</button>
    </div>
    );
}
export default ChangeBtn;