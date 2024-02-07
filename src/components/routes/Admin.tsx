import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import checkAuthorization from "../../scripts/checkAuthorization";

interface loginInterface{
    emailId: string,
    password: string
}

export default function Admin(){
    const {
        register,
        handleSubmit,
        // watch,
        formState: {errors},
    } = useForm<loginInterface>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<loginInterface> = async (data:loginInterface, 
                     ) => {
        checkAuthorization(data);
        navigate("/admin/Dashboard");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input 
                    {...register("emailId")}
                    onChange={e => e.target}
                    placeholder="Enter emailId"
                />
                {errors.emailId && <span> Its required</span>}
            </div>
            <div>
                <input 
                    type="password"
                    {...register("password")}
                    placeholder="Enter password"
                />
            </div>
            <div>
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
}
