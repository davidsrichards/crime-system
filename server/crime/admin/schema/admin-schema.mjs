import {Schema, model} from 'mongoose'

const AdminSchema = new Schema({
    username: {
        type: Schema.Types.String,
        required: true,
    },
    password: {
        type: Schema.Types.String,
    }
})

const  Admin = model('ADMIN', AdminSchema);
export default Admin;