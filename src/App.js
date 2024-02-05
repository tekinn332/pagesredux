import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addusername,
  addemail,
  addpassword,
  addconfirmpassword,
  addage,
} from "./components/actions";

function App() {
  const dispatch = useDispatch();
  const { username, email, password, confirmpassword, age } = useSelector(
    (state) => state.infReducer
  );

  // Local state to store input values
  const [localUsername, setLocalUsername] = useState("");
  const [localEmail, setLocalEmail] = useState("");
  const [localPassword, setLocalPassword] = useState("");
  const [localConfirmPassword, setLocalConfirmPassword] = useState("");
  const [localAge, setLocalAge] = useState("");
  const [enteredInformations, setEnteredInformations] = useState([]);

  const handleaddusername = (event) => {
    setLocalUsername(event.target.value);
    dispatch(addusername(event.target.value));
  };

  const handleaddemail = (event) => {
    setLocalEmail(event.target.value);
    dispatch(addemail(event.target.value));
  };

  const handleaddpassword = (event) => {
    setLocalPassword(event.target.value);
    dispatch(addpassword(event.target.value));
  };

  const hanleaddconfirmpassword = (event) => {
    setLocalConfirmPassword(event.target.value);
    dispatch(addconfirmpassword(event.target.value));
  };

  const handleaddage = (event) => {
    setLocalAge(event.target.value);
    dispatch(addage(event.target.value));
  };

  const handleMapOnScreen = () => {
    const newEnteredInformation = {
      username: localUsername,
      email: localEmail,
      password: localPassword,
      confirmPassword: localConfirmPassword,
      age: localAge,
    };

    setEnteredInformations([...enteredInformations, newEnteredInformation]);

    setLocalUsername("");
    setLocalEmail("");
    setLocalPassword("");
    setLocalConfirmPassword("");
    setLocalAge("");
  };

  return (
    <div className="App">
      <input
        type="text"
        value={localUsername}
        onChange={handleaddusername}
        placeholder="Username"
      />
      <input
        type="text"
        value={localEmail}
        onChange={handleaddemail}
        placeholder="Email"
      />
      <input
        type="password"
        value={localPassword}
        onChange={handleaddpassword}
        placeholder="Password"
      />
      <input
        type="password"
        value={localConfirmPassword}
        onChange={hanleaddconfirmpassword}
        placeholder="Confirm Password"
      />
      <input
        type="text"
        value={localAge}
        onChange={handleaddage}
        placeholder="Age"
      />
      <button onClick={handleMapOnScreen}>Check Conditions</button>

      {enteredInformations.map((registration, index) => (
        <div key={index}>
          <p>Username: {registration.username}</p>
          <p>Email: {registration.email}</p>
          <p>Password: {registration.password}</p>
          <p>Confirm Password: {registration.confirmPassword}</p>
          <p>Age: {registration.age}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
