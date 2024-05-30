import {useForm} from "react-hook-form";
import {AuthDataModel} from "../models/AuthDataModel";

const FormComponent = () => {
    const {handleSubmit,
           register} = useForm<AuthDataModel>({defaultValues:{username: "griGoriy1278344", password: "Pa$$word2rtr"}});
    const authenticate = (formData:AuthDataModel)=>{

    }
    return (
        <div>
            <form onSubmit={handleSubmit((authenticate)=>{
                authService.authenticator
                //todo
            })}>

                <input type="text" {...register('username')} />
                <input type="text"{...register('password')} />

            </form>
        </div>
    );
};

export {FormComponent};