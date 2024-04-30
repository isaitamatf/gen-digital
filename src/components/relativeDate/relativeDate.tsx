/*
 * Write a function that will take a date and compare with today date and return text:
 * - Today: same year, same month, same date
 * - Yesterday: date = today - 1
 * - This week: today - 7 < date < today - 1
 * - Last week: today - 14 < date <= today - 7
 * - This month: same year, same month, date <= today - 14
 * - Last month: month = current month - 1
 * - This year: same year
 * - last year: year = current year - 1
 * - Long time ago: everything else
 *
 * Lastly, please write a unit test for calculateRelativeDate function
 * */

import React, { useState, ChangeEvent } from "react";
import moment from "moment";

const RelativeDate: React.FC = () => {
  const [inputDate, setInputDate] = useState<string>("");
  const [outputMessage, setOutputMessage] = useState<string>("");

  /**
   * @description Calculate the difference between today and the input date
   * @returns {string} Output message
   */
  const calculateRelativeDate = () => {
    const TODAY = moment();
    const INPUT = moment(inputDate);
    // Today: same year, same month, same date
    if (INPUT.isSame(TODAY, "day")) {
      return "Today";
    }
    // Yesterday: date = today - 1
    const YESTERDAY = TODAY.clone().subtract(1, "day");
    if (INPUT.isSame(YESTERDAY, "day")) {
      return "Yesterday";
    }
    // This week: today - 7 < date < today - 1
    const THIS_WEEK = TODAY.clone().subtract(7, "days");
    if (INPUT.isAfter(THIS_WEEK) && INPUT.isBefore(YESTERDAY)) {
      return "This week";
    }
    // Last week: today - 14 < date <= today - 7
    const LAST_WEEK = TODAY.clone().subtract(14, "days");
    if (INPUT.isAfter(LAST_WEEK) && INPUT.isSameOrBefore(THIS_WEEK)) {
      return "Last week";
    }
    // This month: same year, same month, date <= today - 14
    if (INPUT.isSame(TODAY, "month") && INPUT.isBefore(LAST_WEEK)) {
      return "This month";
    }
    // Last month: month = current month - 1
    const THIS_MONTH = TODAY.clone().subtract(1, "month");
    if (INPUT.isSame(THIS_MONTH, "month")) {
      return "Last month";
    }
    // This year: same year
    if (INPUT.isSame(TODAY, "year")) {
      return "This year";
    }
    // Last year: year = current year - 1
    const LAST_YEAR = TODAY.clone().subtract(1, "year");
    if (INPUT.isSame(LAST_YEAR, "year")) {
      return "Last year";
    }
    // Long time ago: everything else
    return "Long time ago";
  };

  /**
   * @description Input onChange method
   * @param {ChangeEvent<HTMLInputElement>} e
   */
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputDate(e.target.value);
  };

  /**
   * @description Input onClick method
   */
  const onClick = () => {
    const newOutputData = calculateRelativeDate();
    setOutputMessage(newOutputData);
  };

  return (
    <div className="form-group" data-testid="relative-date">
      <div className="row">
        <h1 className="text-center">Relative Date</h1>
      </div>
      <div className="row">
        <label>Input Date:</label>
        <input type="date" value={inputDate} onChange={onChange} />
      </div>
      <div className="row">
        <label>Output:</label>
        <span>{outputMessage}</span>
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-secondary"
          id="relative-date-btn"
          onClick={onClick}
        >
          Get Relative Date
        </button>
      </div>
    </div>
  );
};

export { RelativeDate };
