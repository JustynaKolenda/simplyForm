import React from 'react';
import {reduxForm,  Field} from 'redux-form'
import './App.css';
import { renderDateTimePicker } from './DatePicker';

const FormSimply = () => {
  return (
      <form>
          <div>
            <label>First Name</label>
            <Field name="firstName" component="input"/>
          </div>
          <div>
            <label>Last Name</label>
            <Field name="lastName" component="input"/>
          </div>
          <div>
            <label>Email</label>
            <Field name="email" component="input"/>
          </div>
          <div>
            <label>Date </label>
            <Field name="dob" showTime={true} component={renderDateTimePicker}/>
          </div>
          <div>
        {/* <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Reset Values */}
        {/* </button> */}
      </div>
      </form>
  );
}


export const FormSimplys = reduxForm({
  form: 'simplyForm'
})(FormSimply)
