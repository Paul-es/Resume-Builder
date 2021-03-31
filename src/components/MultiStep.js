import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import UserDetails from "./user-details";
import EduExp from './edu_exp'
const steps = [
  { id: "user_details" },
  { id: "edu_exp" },

];

const defaultData = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  country: "",
  zip: "",
  email: "",
  phone: "",
  institution: "", 
  location: "",
  degree:"", 
  field:"",
  month:"",
  year:""
};

const MultiStep = ({ images }) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "user_details":
      return <UserDetails {...props} />;
    case "edu_exp":
        return <EduExp {...props} />;
    default:
      return null;
  }
};

export default MultiStep;
