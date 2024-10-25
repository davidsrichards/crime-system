import {Schema, model} from 'mongoose'

const UserSchema = new Schema({
    username: {
        type: Schema.Types.String,
        required: true,
    },
    password: {
        type: Schema.Types.String,
        required: true,
    },
    age: {
        type: Schema.Types.String,
        required: true,
    },
})


const Users = model('Users', UserSchema);
export default Users;