import {sendForm} from '../../conectors/FormConector'

export function simplyForm(formSend: any){
    return async (dispatch : any) => {
        try{
            const data = await sendForm(formSend);
            console.log(data)
        }catch(err){
            console.log(err)
        }
    } 
}