import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
import "../css/styles.css";
import axios from "axios";

const Download = () => {
    const { push } = useHistory();
    const { state } = useStateMachine(updateAction);

const onSubmit=()=>{
  axios
  .post("http://127.0.0.1:5000/details", state.yourDetails)
  .then((res) => {
    console.log(res.data);
  })
}
console.log(state)
  return (
    <div class="user">
    <div class="title">
      <h1 class="title_style">
        All Set Download Your File!!!
      </h1>
      
      </div>

      <form onSubmit={onSubmit}>
      <div class="d-flex justify-content-center">
      <button type="submit" class="icon-button"><i class="fa fa-download"></i> Download</button>
      </div>
      </form>
      <input class="btn-bottom-left" onClick={() => push('/skills')} type="submit" value="Back" />

      </div>
  );
}
export default Download;