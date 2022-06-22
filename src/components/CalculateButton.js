import React from "react";

const CalculateButton = (props) => {
  return (
    <div className="grid place-items-center">
      <button
        type="submit"
        className="bg-red-300 hover:bg-red-400 p-4 m-2 font-bold border-4 border-red-500 rounded-xl"
        data-test-id="calculate-button"
        onClick={props.handleCalculation}
      >
        Can I be in the EU?
      </button>
    </div>
  );
};

export default CalculateButton;
