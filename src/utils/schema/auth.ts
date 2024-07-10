import { z } from "zod";

export const RegistrationSchema = z.object({
    firstName: z.string().trim().min(3, "first name length be at least 3 character").max(25, "maximum length of first name is 25 character"),
    lastName: z.string().trim().min(3, "last name length be at least 3 character").max(25, "maximum length of last name is 25 character"),
    email: z.string().trim().min(1, "Please enter the email").email("please enter correct format email"),
    password: z.string().trim().min(6, "password length be at least 6 character").max(12, "maximum length of password is 12 character"),
});


export const LoginSchema = z.object({
    email: z.string().trim().min(1, "Please enter the email").email("please enter correct format email"),
    password: z.string().trim().min(6, "password length be at least 6 character").max(12, "maximum length of password is 12 character"),
});
