import React from "react";
import PropTypes from "prop-types";
import { NumericInput, RelativeDate } from "../../components";

export type ContentProps = {
  tabSelected: number;
};

const Content: React.FC<ContentProps> = ({ tabSelected }) => {
  const showContentSelected = () =>  {
    switch (tabSelected) {
      case 0:
        return <NumericInput />;
      case 1:
        return <RelativeDate />;
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
