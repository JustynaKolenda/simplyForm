import React from 'react';
import { FormSimplys } from './FormSimply';
import {connect} from 'react-redux'
import {FormAction} from './redux/FormAction';


 class FormPage extends React.Component<any,any> {
    public handlerSubmit=(form:any)=>{
        this.props.sendForm(form)
    }
    
    render(){
        return (
         <FormSimplys onSubmit={this.handlerSubmit}/>
        )
    }
}


const mapDispatchToProps = (dispatch: any)=> {
    return{
        sendForm: (form: any)=> dispatch(FormAction.simplyForm(form))
    }
}
export default connect(null, mapDispatchToProps)(FormPage);