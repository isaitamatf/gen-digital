import React from "react";
import PropTypes from "prop-types";
import { NumericInput } from "../../components";

export type ContentProps = {
  tabSelected: number;
};

const Content: React.FC<ContentProps> = ({ tabSelected }) => {
  const showContentSelected = () =>  {
    switch (tabSelected) {
      case 0:
        return <NumericInput />;
      case 1:
        return (
          <div className="form-group">
            <div className="row">
              <h1 className="text-center">Relative Date</h1>
            </div>
            <div className="row">
              <label>Input Date:</label>
              <input type="date" id="relative-date-input" /> <br />
            </div>
            <div className="row">
              <label>Output:</label>
              <span id="relative-date-msg"></span> <br />
            </div>
            <div className="row">
              <button type="button" className="btn btn-secondary" id="relative-date-btn">Get Relative Date</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-group">
            <div className="row">
              <h1 className="text-center">Shopping Cart</h1>
            </div>
            <div className="row">
              <table
                className="table table-striped table-hover"
                id="shopping-cart-tbl"
                border={1}
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Item</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        );
      default:
        break;
    }
  };
  return (
    <div className="col-md-12">
      <form>
        {showContentSelected()}
      </form>
    </div>
  );
};

Content.propTypes = {
  tabSelected: PropTypes.number.isRequired,
};

export { Content };
