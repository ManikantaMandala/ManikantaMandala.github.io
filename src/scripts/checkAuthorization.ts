import dotenv from "./dotEnv";

export default async function checkAuthorization(data:any){
    // TODO: need to resolve this error
    // Add this preventDefault
    // e.preventDefault();
    try{
        const response = await fetch(`${dotenv.BACKEND_LINK}/admin/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: data.emailId,
                password: data.password,
            })
        });
        const json = await response.json();
        console.log(json);
        if(!response.ok){
            throw new Error('Something went wrong');
        }
        localStorage.setItem('authToken', json.token);
    }
    catch(error:any){
        console.log(error.message);
    }
}
