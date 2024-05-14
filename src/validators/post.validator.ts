import Joi from "joi";

export const postValidators =
    Joi
        .object({
            userId: Joi.number()
                .min(1)
                .max(20)
                .required()
                .messages({
                    'number.min':'min 1',
                    'number.max':'max 20',
                }),
            title: Joi.string()
                .pattern(/^[a-zA-Z]+$/u)
                .required()
                .messages({
                    "string.pattern.base":"title only letters",
                    "string.empty":"Required field",
                }),
            body: Joi.string()
                .pattern(/^[a-zA-Z]+$/u)
                .required()
                .messages({
                    "string.pattern.base":"body only letters",
                    "string.empty":"Required field",
                })

    })
