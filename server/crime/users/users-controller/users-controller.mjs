import { comparePassword, hashpassword } from "../../hashing/hashing.mjs";
import Crimes from "../crime-schema/crime-schema.mjs";
import Users from "./users-schema.mjs";

// verify User

export async function verifyUser (req, res, next){
    const {username} = req.query
    try {
        const findUser = await Users.findOne({username});
        if(!findUser) return res.status(404).send('user not found');
        req.findUserByName = findUser;
        next()
    } catch (error) {
        return res.status(500).send({error: 'there is an error'})
        
    }
}

export async function registerUsers (req, res) {
    const body = req.body;
    if(!body.username || !body.password) return res.status('username and password required');
    try {
        req.body.password = hashpassword(req.body.password)
        const newUser =  new Users(body);
        const savedUser = await newUser.save()
        if(savedUser) return res.status(201).json(savedUser);
    
    } catch (error) {
        return res.status(500).json(error)
    }
}

// login

export async function userLogin(req, res) {
    const {username, password} = req.body;
    try {
    const findUser = await Users.findOne({username});
    if(!findUser) return res.status(404).send('User not found');
        if(!comparePassword(password, findUser.password)) return res.status(401).send('Invalid Credentials');
        return res.status(200).json(findUser)
    } catch (error) {
        return res.status(500).json({error: error});
    }
}

// update user

export async function updateUser (req, res) {
    const {id} = req.params;
    const body = req.body;
    if(!body.username || !body.password) return res.status(403).send('provide username and password')
    try {
       const finById = await Users.findById(id);
       if(!finById) return res.status(404).send('Not found')
       body.password = hashpassword(body.password)
        const updatedUser = await Users.findByIdAndUpdate(id, body);
        if(!updatedUser) return res.status(400).send('could not update user');
        return res.status(201).send('update successful')
    } catch (error) {
        return res.status(500).json({error: error})
    }
}

// report crime

export async function reportCrime (req, res) {
    const body = req.body;
   try {
    const newCrime = new Crimes(body)
    const savedCrime = await newCrime.save()
    if(savedCrime) return res.status(201).json({response: savedCrime})
    
   } catch (error) {
    return res.status(401).json({error: error})
    
   }
}


// get single user
export async function getSingleUser (req, res) {
    const {id} = req.params;
    try {
        const findUser = await Users.findOne({_id: id});
        if(!findUser) return res.status(404).send('Not found')
            return res.status(200).json(findUser)
    } catch (error) {
        return res.status(500).json(error)
        
    }
}

