import * as ActionEnum from './ActionEnum'
import {Actions} from './FormActionModel'

export type messageState = {
    typeMsg : ActionEnum.TypeMsg | null,
    mesage: string | null
}

export const initialState:messageState = {
    typeMsg : null,
    mesage: null
}

export function messageReducer(state = initialState, actions : Actions ) {
    switch(actions.type) {
        case ActionEnum.Form.SET_MESAGE :
            return {
                ...state,
                typeMsg: actions.payload.typeMsg,
                mesage: actions.payload.mesage
            };
        default:
            return state;

    }
} 