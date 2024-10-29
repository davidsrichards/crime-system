import { comparePassword, hashpassword } from "../../hashing/hashing.mjs";
import Admin from "../schema/admin-schema.mjs";
import jwt from "jsonwebtoken";
import ENV from "../../../config.js";
import Users from "../../users/users-controller/users-schema.mjs";
import Crimes from "../../users/crime-schema/crime-schema.mjs";

// find admin

export const verifyAdmin = async (req, res, next) => {
  const { username } = req.method === "GET" ? req.query : req.body;
  try {
    const findAdmin = await Admin.findOne({ username });
    if (!findAdmin) return res.status(404).send("User not found");
    req.findAdmin = findAdmin;
    next()
  } catch (error) {
    return res.status.json(error);
  }
};

// register new admin
export const registerAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password)
      return res.status(400).send("please provide username and password");
    const hashedPassword = hashpassword(password);
    const newAdmin = new Admin({ username, password: hashedPassword });
    const savedAdmin = await newAdmin.save();
    if (savedAdmin) return res.status(201).json(savedAdmin);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// login

export const adminLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const findAdmin = await Admin.findOne({ username });
    if (!findAdmin) return res.status(404).json("user not found");
    if (!comparePassword(password, findAdmin.password))
      return res.status(404).json("Invalid Credentials");
    const token = jwt.sign(
      {
        adminId: findAdmin._id,
        username: findAdmin.username,
      },
      ENV.JWT_SECRET,
      { expiresIn: "6h" }
    );
    return res.status(200).json({ message: findAdmin.username, token });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// get admin

export async function getAdmin (req, res) {
  try {
    const findAdmin = await Admin.find().select('-password');
    if(!findAdmin) return res.status(404).send('Not found');
    return res.status(200).json(findAdmin)
  } catch (error) {
    return res.status(500).json({error})
  }
}

// get users

export async function getAllUsers (req, res) {
  try {
    const findUser = await Users.find().select('-password');
    if (!findUser) return res.status(404).send('user not found')
    return res.status(200).json(findUser)
  } catch (error) {
    return res.status(500).json({ error: error })
  }

}

// updated admin

export const updateAdmin = async (req, res) => {
  const {adminId} = req.user;
  const body = req.body;
  try {
    const findAdmin = await Admin.findOne({_id: adminId});
    if (!findAdmin) return res.status(404).send('Invalid Token')
      body.password = hashpassword(body.password)
    const updatedAdmin = await Admin.findByIdAndUpdate(adminId, body);
  if(updatedAdmin) return res.status(201).send('updated successful')
      
  } catch (error) {
    return res.status(500).json(error);
  }
};

// delete user

export async function deleteUser (req, res) {
  const {id} = req.params;
 try {
  const findById = await Users.findById(id);
  if(!findById) return res.status(400).send('user not found')
    const deletedUser = await Users.findByIdAndDelete({_id: id});
  if(deletedUser) return res.status(200).send('deleted Successful')
 } catch (error) {
  return res.status(500).json({error: error})
 }
}

// get crime info

export async function getCrime (req, res) {
  try {
    const allCrime = await Crimes.find();
    if(!allCrime) return res.status(404).json('Crime not available')
      return res.status(200).json(allCrime)
  } catch (error) {
return res.status(500).json({error: error})
    
  }
}

// get crim via id

export async function getCrimeById (req, res) {
  const {id} = req.params;
  try {
    const findCrimeById = await Crimes.findOne({_id: id});
    if(!findCrimeById) return res.status(404).send('Crime Not Found');
    return res.status(200).json(findCrimeById);
  } catch (error) {
    return res.status(500).json({error: error})
    
  }
}
