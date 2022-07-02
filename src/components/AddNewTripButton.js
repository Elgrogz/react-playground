import React from "react";

const AddNewTripButton = (props) => {
  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="bg-green-300 hover:bg-green-400 p-2 m-2 font-bold border-4 border-green-500 rounded-xl "
        data-testid="add-new-trip-button"
        onClick={props.addTrip}
      >
        Add New Trip
      </button>
    </div>
  );
};

export default AddNewTripButton;
