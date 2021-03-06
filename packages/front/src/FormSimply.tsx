import React from 'react';
import {reduxForm,  Field} from 'redux-form'
import './App.css';
import { renderDateTimePicker } from './formElement/DatePicker';
import { ValidationForm } from '@project/common';
import { InputValid } from './formElement/InputValid';
import { Button, Container, Row, Col } from 'reactstrap';

const FormSimply = (props:any) => {
  const { handleSubmit, submitting } = props
  return (
    <Container  >
      <form onSubmit={handleSubmit} >
        <Row sm="12" md={{ size: 6, offset: 3 }} >
          <Col lg={12}>
            <label id="test" className="App">First Name</label>
            <Field name="firstName" e2eId={"name"} component={InputValid}
               validate={ValidationForm.required} 
             />
          </Col>
          <Col lg={12}>
            <label className="App">Last Name</label>
            <Field  name="lastName" e2eId={"surName"} component={InputValid}
                validate={ValidationForm.required}
              />
          </Col>
          <Col lg={12}>
            <label className="App">Email</label>
            <Field name="email" e2eId={"mail"} component={InputValid}
            validate = {[ValidationForm.required, ValidationForm.email]} 
             />
          </Col>
          <Col lg={4}>
            <label className="App">Date </label>
            <Field name="date" showTime={true} e2eId={"dateTime"} component={renderDateTimePicker} 
            validate = {ValidationForm.requiredDate} 
            className="col-lg-4" />
          </Col>
          <Button color="info" className="col-lg-2 offset-xs-1 App--button" type="submit" id={"buttonSend"} disabled={submitting}>Send</Button>
          <div>
      </div>
      </Row>
      </form>
      </Container>
  );
}

export const FormSimplys = reduxForm({
  form: 'simplyForm'
})(FormSimply)
