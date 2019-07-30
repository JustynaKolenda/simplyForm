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
        <div>
            <label htmlFor={input.name}>{label}</label>
            <input {...input} placeholder={placeholder}  />
                {(meta.touched &&
                    (meta.error && <div>{meta.error}</div>
                        )) ||
                    (meta.warning && <span>{meta.warning}</span>)
                } 
        </div>
    )

}
