import React from "react";
import "../css/user-details.css";

const UserDetails = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, address,city,zip,country,email,phone } = formData;
  return (
    <>
    <div class="user">
    <div class="title">
      <h1 class="title_style">
        Contact Information
      </h1>
    </div>

    <form>
      <div class=" container">
        <div class="row">
          <div class="col-sm">
            <div class="input-group flex-nowrap">
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
                value={firstName}
                name="firstName"
                onChange={setForm}
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div class="col-sm">
            <div class="input-group flex-nowrap">
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                name="lastName"
                onChange={setForm}
                value={lastName}
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
                placeholder="Address"
                name="address"
                value={address}
                onChange={setForm}
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
                placeholder="City"
                name="city"
                onChange={setForm}
                value={city}
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div class="col-sm">
            <div class="input-group flex-nowrap">
              <input
                type="text"
                class="form-control"
                placeholder="Zip Code"
                name="zip"
                onChange={setForm}
                value={zip}
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div class="col-sm">
            <div class="input-group flex-nowrap">
              <input
                type="text"
                class="form-control"
                placeholder="Country"
                name="country"
                onChange={setForm}
                value={country}
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
                placeholder="email"
                name="email"
                onChange={setForm}                
                value={email}
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div class="col-sm">
            <div class="input-group flex-nowrap">
              <input
                type="text"
                class="form-control"
                placeholder="Phone No"
                name="phone"
                onChange={setForm}                
                value={phone}
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
        </div>
      <input class="btn-bottom-right" onClick={()=> navigation.next()} type="submit" value="Next" />
      </div>
    </form>
    </div>
    </>
  );
};

export default UserDetails;
