import dotenv from "./dotEnv";

export default async function checkAuthorization(data:any,
                                  e: React.ChangeEvent<HTMLInputElement>){
    e.preventDefault();
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
        if(!response.ok){
            throw new Error('Something went wrong');
        }
        localStorage.setItem('authToken', json.token);
    }
    catch(error:any){
        console.log(error.message);
    }
}
