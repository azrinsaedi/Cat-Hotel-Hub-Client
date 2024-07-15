import { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';

export default function Calendar({ dates, setDates }) {
  return (
    <DatePicker
      inputClass='custom_input-picker'
      containerClassName='custom_container-picker'
      value={dates}
      onChange={setDates}
      numberOfMonths={2}
      offsetY={10}
      range
      rangeHover
      format='MMMM DD'
    />
  );
}
