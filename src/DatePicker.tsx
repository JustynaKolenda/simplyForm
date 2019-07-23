import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const renderDateTimePicker = (props: any) =>{
    const { input: { onChange, value } } = props
    return(
        <DatePicker
        selected={value}
        onChange={onChange}
      />
    )
}
  