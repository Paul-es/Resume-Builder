import React,{ useState } from "react";
import "../css/user-details.css";

const EduExp = ({ setForm, formData, navigation }) => {

  const { institution, location,degree, field,month,year } = formData;

  const [inputList, setInputList] = useState([{ institution: "", location: "",degree:"", field:"",month:"",year:"" }]);
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { institution: "", location: "",degree:"", field:"",month:"",year:"" }]);
  };

    return (
    <>
    <div class="title">
      <h1 class="title_style">
        Education
      </h1>
    </div>
    <div class=" container">

{inputList.map((x, i) => {
    return(
    <form>
        <div class="row">
          <div class="col-sm">
            <div class="input-group flex-nowrap">
              <input
                type="text"
                class="form-control"
                placeholder="Institute Name"
                value={x.institution}
                name="institution"
                onChange={e => handleInputChange(e, i)}                
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div class="col-sm">
            <div class="input-group flex-nowrap">
              <input
                type="text"
                class="form-control"
                placeholder="Location"
                value={x.location}
                name="location"
                onChange={e => handleInputChange(e, i)}
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <div class="input-group flex-nowrap">
              <input
                type="text"
                class="form-control"
                placeholder="Degree"
                value={x.degree}
                name="degree"
                onChange={e => handleInputChange(e, i)}
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
      </div>
      <div class="row">
          <div class="col-sm">
            <div class="input-group flex-nowrap">
              <input
                type="text"
                class="form-control"
                placeholder="Field of Study"
                value={x.field}
                name="field"
                onChange={e => handleInputChange(e, i)}
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div class="col-sm">
            <div class="input-group flex-nowrap">
              <input
                type="text"
                class="form-control"
                placeholder="Month"
                value={x.month}
                name="month"
                onChange={e => handleInputChange(e, i)}
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div class="col-sm">
            <div class="input-group flex-nowrap">
              <input
                type="text"
                class="form-control"
                placeholder="Year"
                value={x.year}
                name="year"
                onChange={e => handleInputChange(e, i)}
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
        </div>
        {inputList.length !== 1 && <input style={{background:'red'}} onClick={() => handleRemoveClick(i)} type="submit" value="Remove" />}
        {inputList.length - 1 === i && <input style={{float:'right'}} onClick={handleAddClick} type="submit" value="Add" />}
      </form>
    )
})}

      <input class="btn-bottom-right" onClick={()=> navigation.next()} type="submit" value="Next" />
      <input class="btn-bottom-left" onClick={()=> navigation.previous()} type="submit" value="Back" />

</div>
    </>
  );
};

export default EduExp;
