import {Schema, model} from 'mongoose'

const CrimeSchema = new Schema({
        address: {
            street: String,
            city: String,
            state: String,
        },
        description: {
            type: Schema.Types.String,
            required: true,
        },
        contact: {
            type: Schema.Types.String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    
})


const Crimes =  model('Crimes', CrimeSchema)

export default Crimes;