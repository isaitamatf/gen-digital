/*
 * Numeric Input Component
 *   HTML (initial state): <input type="text" class="c-numeric-input" />
 *   Requirement:
 *   - should only accept numeric value only such as: 1, 1.2, -5, or 1000
 *   - if user enters leading zero, or .  when user moves focus away from the input, it should
 *     change to correct format:
 *       .1 ==> 0.1 and 01 => 1
 *   - if user enter invalid character/value, HTML should change to this
 *       <input type="text" class="c-numeric-input c-numeric-input--error" />
 *       <span class="c-numeric-input__error-msg">invalid input</span>
 *   - if user enter valid value and move focus away from the input HTML should change to this:
 *       <input type="text" class="c-numeric-input c-numeric-input--valid" />
 *   - if user focus on the input or user clear value from the input,
 *     HTML should return to initial stage
 *
 * Lastly, please add some css for c-numeric-input--error and c-numeric-input--valid to show
 * red or green border to the input
 * */

import React, { useState, ChangeEvent } from "react";
import { REGEX_LEADING_ZERO, REGEX_NON_NUMERIC, REGEX_REPLACE_LEADING_ZERO } from "../../constants";

type IsValid = "true" | "false" | "";

const NumericInput: React.FC = () => {
  // Input value state
  const [value, setValue] = useState<string>("");
  // Input validity, "true" is valid, "false" is invalid and "" is empty input value
  const [isValid, setIsValid] = useState<IsValid>("");

  /**
   * @description Input onChange method
   * @param {ChangeEvent<HTMLInputElement>}
   */
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value;
    // If input value is not numeric then we prevent the char and then we set is invalid
    if (REGEX_NON_NUMERIC.test(newValue)) {
      setValue(newValue.replace(REGEX_NON_NUMERIC, ""));
      setIsValid("false");
    } else {
      setValue(newValue);
      setIsValid("");
    }
  };

  /**
   * @description Input onBlur method
   */
  const onBlur = () => {
    let newValue: string = value;
    // If the input value is empty then we reset the values
    if (newValue === "") {
      setValue(newValue);
      setIsValid("");
    } else {
      // If first char is "." then we change the format
      if (newValue[0] === ".") {
        newValue = "0" + newValue;
      }
      // If input value enter leading zeros then we change the format
      if (REGEX_LEADING_ZERO.test(newValue)) {
        newValue = newValue.replace(REGEX_REPLACE_LEADING_ZERO, "");
      }
      setValue(newValue);
      setIsValid("true");
    }
  };

  /**
   * @description Show error when the input is invalid
   * @returns {JSX.Element}
   */
  const showError = () => {
    return isValid === "false" ? (
      <div className="alert alert-danger" role="alert">
        <span className="c-numeric-input__error-msg">Invalid input</span>
      </div>
    ) : null;
  };

  const inputValid = isValid === "true" ? "c-numeric-input--valid" : "";
  const inputError = isValid === "false" ? "c-numeric-input--error" : "";

  return (
    <div className="form-group">
      <div className="row">
        <h1 className="text-center">Numeric Input Component</h1>
      </div>
      <div className="row">
        <label>Enter Number: </label>
        <input
          className={`form-control c-numeric-input ${inputValid} ${inputError}`}
          type="text"
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        />
        {showError()}
      </div>
    </div>
  );
};

export { NumericInput };
