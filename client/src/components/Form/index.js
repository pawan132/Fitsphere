import React from 'react';

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button
      {...props}
      style={{ float: 'right', marginBottom: 10 }}
      className="btn btn-success"
    >
      {props.children}
    </button>
  );
}

export function State(props) {
  return (
    <div className="form-group">
      <select {...props}>
        <option value="DL">Delhi</option>
        <option value="BI">Bihar</option>
        <option value="MZ">Mizoram</option>
        <option value="GO">Goa</option>
        <option value="CH">Chattisgarh</option>
        <option value="KT">Karnataka</option>
        <option value="MH">Maharashtra</option>
        <option value="AP">Andhra Pradesh</option>
        <option value="PJ">Punjab</option>
        <option value="WB">West Bengal</option>
        <option value="TP">Tripura</option>
        <option value="HR">Haryana</option>
        <option value="HP">Himachal Pradesh</option>
        <option value="GT">Gujrat</option>
        <option value="AM">Assam</option>
        <option value="MN">Manipur</option>
        <option value="JH">Jharkhand</option>
        <option value="KL">Kerla</option>
        <option value="AP">Arunachal Pradesh</option>
        <option value="RJ">Rajasthan</option>
        <option value="MP">Madhya Pradesh</option>
        <option value="TN">Tamil Nadu</option>
        <option value="OD">Odisha</option>
        <option value="NG">Nagaland</option>
        <option value="UP">Uttar Pradesh</option>
        <option value="SI">Sikkim</option>
        <option value="ML">Meghalaya</option>
        <option value="TL">Telangana</option>
        <option value="UK">Uttrakhand</option>
        <option value="JK">Jammu & Kashmir</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
    </div>
  );
}
