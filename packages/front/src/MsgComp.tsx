import React from 'react';
import {connect} from 'react-redux'
import {StateRoot} from './redux/reducer'

export class MsgComp extends React.Component <any,any> {

    render(){
      const { mesage, typeOfMsg } = this.props
      const msgClass = (typeOfMsg === 'SUCESS'? "MsgShow MsgShow--sucess" : "MsgShow MsgShow--error")
        return(
            <div>
               <div className={msgClass}> {mesage} </div>
            </div>
        )
    }

}
    const mapStateToProps = (state: StateRoot) =>{
        return{
            mesage : state.message.mesage ,
            typeOfMsg : state.message.typeMsg
        }
    }

export default connect(mapStateToProps, null)(MsgComp)