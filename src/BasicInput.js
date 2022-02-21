import React, { useState } from "react";
import "./BasicInput.css";
function BasicInput() {
  const [name, setName] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  const nameIsValid = name.trim() !== "";
  const nameIsInValid = !nameIsValid && isTouch;
  const onChangeHandler = (e) => {
    setName(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    setIsTouch(true);
    if (!nameIsValid) {
      return;
    }
    setName("");
    setIsTouch(false);
  };
  const onBlurHandler = () => {
    setIsTouch(true);
  };

  const formControlClass = nameIsInValid
    ? "form-control invalid"
    : "form-control";
  return (
    <div className="form-container">
      <form action="" onSubmit={onSubmitHandler}>
        <div className={formControlClass}>
          <label htmlFor="name">Your Name</label> <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
          {nameIsInValid && (
            <p className="error-text">Empty name is Not Allowed !</p>
          )}
          <div className="form-actions">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BasicInput;
