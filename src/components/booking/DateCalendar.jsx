import DatePicker, { Calendar } from "react-multi-date-picker";
export default function DateCalendar() {
  return (
    <>
      <Calendar
        numberOfMonths={2}
        range
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
      />
    </>
  );
}
