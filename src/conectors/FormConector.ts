
export function sendForm(data:any){
    return fetch('/', {
        method: 'POST',
        body: JSON.stringify(data)
    })
}