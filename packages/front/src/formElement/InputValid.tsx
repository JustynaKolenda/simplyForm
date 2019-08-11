import React from 'react'
import {WrappedFieldProps} from 'redux-form'

type Props ={
    label: string;
    placeholder: string;
    e2eId?: string;
}

export const InputValid = (props: WrappedFieldProps & Props) =>{
    const { input, meta, label, placeholder,  } = props
    return(
        <div className="App--error" >
            <label htmlFor={input.name}>{label}</label>
            <input className="col-lg-6" {...input} placeholder={placeholder}  />
                {(meta.touched &&
                    (meta.error && <div>{meta.error}</div>
                        )) ||
                    (meta.warning && <span>{meta.warning}</span>)
                } 
        </div>
    )

}
