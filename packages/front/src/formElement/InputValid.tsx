import React from 'react'
import {WrappedFieldProps} from 'redux-form'

type Props ={
    label: string;
    placeholder: string;
    e2eId?: string;
}

export const InputValid = (props: WrappedFieldProps & Props) =>{
    const { input, meta, label, placeholder,e2eId} = props
    return(
        <div className="App--error" >
            <label htmlFor={input.name}>{label}</label>
            <input className="col-lg-6" {...input}  id={e2eId} placeholder={placeholder}  />
                {(meta.touched &&
                    (meta.error && <div id={e2eId + 'error'}>{meta.error}</div>
                        )) ||
                    (meta.warning && <span>{meta.warning}</span>)
                } 
        </div>
    )

}
