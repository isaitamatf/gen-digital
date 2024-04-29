import React from "react";
import PropTypes from "prop-types";

export type TabsProps = {
  tabSelected: number;
  setTabSelected: React.Dispatch<React.SetStateAction<number>>;
};

const Tabs: React.FC<TabsProps> = ({ tabSelected, setTabSelected }) => {
  const tabSelectedClass = (id: number) => {
    return tabSelected === id ? "btn-primary" : "btn-default";
  };
  return (
    <div className="btn-group btn-group-justified" data-testid="tabs">
      <button
        type="button"
        className={`btn ${tabSelectedClass(0)}`}
        onClick={() => setTabSelected(0)}
      >
        Numeric Input
      </button>
      <button
        type="button"
        className={`btn ${tabSelectedClass(1)}`}
        onClick={() => setTabSelected(1)}
      >
        Relative Dates
      </button>
      <button
        type="button"
        className={`btn ${tabSelectedClass(2)}`}
        onClick={() => setTabSelected(2)}
      >
        Shopping Cart
      </button>
    </div>
  );
};

Tabs.propTypes = {
  tabSelected: PropTypes.number.isRequired,
  setTabSelected: PropTypes.func.isRequired,
};

export { Tabs };
