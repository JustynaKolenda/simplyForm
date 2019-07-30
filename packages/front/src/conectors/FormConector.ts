
export function sendForm(data:any){
    return fetch('http://localhost:8000/form', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    })
}