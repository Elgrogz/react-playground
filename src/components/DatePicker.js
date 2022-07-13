const Datepicker = (props) => {
  const handleDateChange = (event) => {
    props.handleDateChange(event.target.value);
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex pl-3 pointer-events-none">
        {props.label}
      </div>
      <input
        data-testid={props.dataTestid}
        type="date"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleDateChange}
        value={props.dateValue}
      />
    </div>
  );
};

export default Datepicker;
