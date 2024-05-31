import {set, useForm} from "react-hook-form";
import {AuthDataModel} from "../models/AuthDataModel";
import {authService} from "../services/authService";
import {useState} from "react";

const FormComponent = () => {
    const {handleSubmit,
           register} = useForm<AuthDataModel>({defaultValues:{username: "griGoriy1278344", password: "Pa$$word2rtr"}});

    const [isAuthState, setIsAuthState] = useState<boolean>(false)

    const authenticate = async (formData:AuthDataModel)=>{
       const isAuth = await authService.authentication(formData);
       setIsAuthState(isAuth)
    }
    return (
        <div>
            <div>
                {
                    isAuthState ? <span>ok</span> : <span>not ok</span>

                }
            </div>
            <form onSubmit={handleSubmit((authenticate))}>
                <input type="text" {...register('username')} />
                <input type="text"{...register('password')} />
                <button >Submit</button>

            </form>
        </div>
    );
};

export {FormComponent};