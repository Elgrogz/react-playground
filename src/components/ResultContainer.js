import React from "react";

const ResultContainer = (props) => {
  return (
    <div className="flex justify-center">
      <div className="bg-green-200 w-96 place-content-center p-4 m-2 font-bold border-4 border-green-400 rounded-xl">
        <div className="text-1xl" data-testid="result-container">
          Days spent in the EU: {props.totalDaysInTheEu}
        </div>
        {props.dateWarning}
      </div>
    </div>
  );
};

export default ResultContainer;
