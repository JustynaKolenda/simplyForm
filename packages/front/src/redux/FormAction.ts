import * as ActionEnum from './ActionEnum'
import {sendForm} from '.././conectors/FormConector'

export class FormAction {

    public static simplyForm(formSend: number) : Function{
        return async (dispatch : any) => {
            try{
               const communicat = await (sendForm(formSend));
               const body = await communicat.json();
               if(communicat.status === 200){
                    dispatch(this.setMesage(ActionEnum.TypeMsg.TYPE_MSG_SUCESS, "Form was sent"))
               } else {
                   const errorMsg = (body.error)? body.error : "Soory, something was wrong"
                   dispatch (this.setMesage(ActionEnum.TypeMsg.TYPE_MSG_ERROR, errorMsg))
               }
            }catch(err){
                dispatch (this.setMesage(ActionEnum.TypeMsg.TYPE_MSG_ERROR, "Sory, can't conect to server"))
            }
        } 
    }

    private static setMesage (typeMsg: ActionEnum.TypeMsg, mesage: string){
        return{
            type:  ActionEnum.Form.SET_MESAGE,
            payload:{
                typeMsg ,
                mesage
            }
        }
    }

}