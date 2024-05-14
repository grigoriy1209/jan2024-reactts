import {FC} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {PostModule} from "../interfaces/IPostModule";
import {postValidators} from "../validators/post.validator";
import createPost from "../services/postService";



const FormComponent:FC = () => {
   const {
       register,
       handleSubmit,
       reset,
       formState:{errors,isValid}
               } = useForm<PostModule>({mode:"all", resolver: joiResolver(postValidators)});

    const save=(formValues:PostModule)=> {
           createPost(formValues)
               .then(data=>{
                   console.log(data)
               })
              reset()
    };


    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="number"{...register('userId')}/>
                {
                    errors.userId && <span>{errors.userId.message}</span>
                }
                <input type="text"{...register('title')}/>
                {
                    errors.title && <span>{errors.title.message}</span>
                }
                <input type="text" {...register('body')}/>
                {
                    errors.body && <span>{errors.body.message}</span>
                }
                <button>save</button>

            </form>
        </div>
    );

};
export {FormComponent};