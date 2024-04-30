import React from "react";
import PropTypes from "prop-types";
import { NumericInput, RelativeDate, ShoppingCart } from "../../components";

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
        return <ShoppingCart />
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
