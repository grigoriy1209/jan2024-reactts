import {FC} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {PostModule} from "../interfaces/IPostModule";
import {postValidators} from "../validators/post.validator";



const FormComponent:FC = () => {
   const {
       register,
       handleSubmit,
       formState:{errors,isValid}
               } = useForm<PostModule>({mode:"all", resolver: joiResolver(postValidators)});

    const save=(formValues:PostModule)=> {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(formValues),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
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