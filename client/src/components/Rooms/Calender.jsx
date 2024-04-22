import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DatePicker = ({ handleSelect, value }) => {
  return (
    <DateRange
      rangeColors={["#F43F5E"]}
      ranges={[value]}
      onChange={handleSelect}
      date={value.startDate}
      direction="vertical"
      showDateDisplay={false}
      minDate={value.startDate}
      maxDate={value.endDate}
    />
  );
};

export default DatePicker;
