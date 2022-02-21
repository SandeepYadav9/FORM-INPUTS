import React from "react";
import "./BasicInput.css";
import useInput from "./hooks/use-Input";
function BasicInput() {
  const {
    value: name,
    onErrorHandler: nameBlurHandler,
    onValueInputHandler: nameChangeHandler,
    nameIsInValid: nameInvalid,
    nameIsValid: validName,
    reset: resetHandler,
  } = useInput((value) => value.trim() !== "");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name);

    if (!validName) {
      return;
    }
    resetHandler();
  };

  const formControlClass = nameInvalid
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
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameInvalid && (
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
