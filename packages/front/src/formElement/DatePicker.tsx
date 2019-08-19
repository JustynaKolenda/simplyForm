import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {WrappedFieldProps} from 'redux-form'

type Props ={
  label: string;
  placeholder: string;
  e2eId?: string;
}
export const renderDateTimePicker = (props: WrappedFieldProps & Props) =>{
    const { input: { onChange, value }, meta , e2eId} = props
    return(
      <div  className="col-lg-6 App--error App--date">
        <DatePicker
        selected={value}
        onChange={onChange}
        id={e2eId}
      />
      {(meta.touched &&
          (meta.error && <div id={e2eId + 'error'}>{meta.error}</div>
            )) ||
            (meta.warning && <span>{meta.warning}</span>)
          } 
      </div>
    )
}
  