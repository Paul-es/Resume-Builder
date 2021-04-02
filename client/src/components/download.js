import React,{useEffect,useState} from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory,Link } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
import "../css/styles.css";
import axios from "axios";


const Download = () => {
    const { push } = useHistory();
    const { state } = useStateMachine(updateAction);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      // do something meaningful, Promises, if/else, whatever, and then
      window.location.assign('http://127.0.0.1:5000/get-pdf');
      axios
      .post("http://127.0.0.1:5000/details", state.yourDetails)
      .then((res) => {
        console.log(res.data);
        window.location.reload(); 
      })
    }
})

  const onSubmit=()=>{

  }
  
console.log(state)
  return (
    <div class="user">
    <div class="title">
      <h1 class="title_style">
        All Set Download Your File!!!
      </h1>
      
      </div>
      <form onSubmit={onSubmit}></form>
      <div class="d-flex justify-content-center">
      <button onClick={() => setClicked(true)} type="submit" class="icon-button"><i class="fa fa-download"></i> Download</button>
      </div>
      <input  class="btn-bottom-left" onClick={() => push('/skills')} type="submit" value="Back" />
      </div>
  );
}
export default Download;