import React from 'react';
import {reduxForm,  Field} from 'redux-form'
import './App.css';
import { renderDateTimePicker } from './formElement/DatePicker';
import { required, email } from './formElement/ValidationForm';
import { InputValid } from './formElement/InputValid';

const FormSimply = (props:any) => {
  const { handleSubmit, submitting } = props
  return (
      <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field name="firstName" component={InputValid} validate={required} />
          </div>
          <div>
            <label>Last Name</label>
            <Field name="lastName" component={InputValid} validate={required} />
          </div>
          <div>
            <label>Email</label>
            <Field name="email" component={InputValid} validate = {[required, email]} />
          </div>
          <div>
            <label>Date </label>
            <Field name="dob" showTime={true} component={renderDateTimePicker} validate = {required} />
          </div>
          <button type="submit" disabled={submitting}>Send</button>
          <div>
      </div>
      </form>
  );
}


export const FormSimplys = reduxForm({
  form: 'simplyForm'
})(FormSimply)
