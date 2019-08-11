import * as ActionEnum from './ActionEnum'

export type setMesage = {
    type:  ActionEnum.Form.SET_MESAGE,
    payload:{
        typeMsg : ActionEnum.TypeMsg,
        mesage : string
    }
}

export type Actions = setMesage;