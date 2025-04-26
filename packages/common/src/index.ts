import {z} from 'zod';

export const signupSchema = z.object({
    username : z.string( { invalid_type_error : "invalid username "}),
    email : z.string ({ invalid_type_error : " email should be email format"}).email(),
    password : z.string()

})

