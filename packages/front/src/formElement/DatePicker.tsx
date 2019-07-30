import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {WrappedFieldProps} from 'redux-form'

export const renderDateTimePicker = (props: WrappedFieldProps) =>{
    const { input: { onChange, value }, meta } = props
    return(
      <div>
        <DatePicker
        selected={value}
        onChange={onChange}
      />
      {(meta.touched &&
          (meta.error && <div>{meta.error}</div>
            )) ||
            (meta.warning && <span>{meta.warning}</span>)
          } 
      </div>
    )
}
  