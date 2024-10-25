import { comparePassword, hashpassword } from "../../hashing/hashing.mjs";
import Admin from "../schema/admin-schema.mjs";
import jwt from "jsonwebtoken";
import ENV from "../../../config.js";
import Users from "../../users/users-controller/users-schema.mjs";

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
    if (!findAdmin) return res.status(404).send("user not found");
    if (!comparePassword(password, findAdmin.password))
      return res.status(404).send("Invalid Credentials");
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

// updated admin

export const updateAdmin = async (req, res) => {
  const {adminId} = req.user;
  const {username, password} = req.body;
  try {
    const findAdmin = await Admin.findById(adminId);
    if (!findAdmin) return res.status(404).send('Invalid Token')
    const updatedAdmin = await Admin.findByIdAndUpdate(adminId, {username, password});
  if(updatedAdmin) return res.status(201).send('updated successful')
      
  } catch (error) {
    return res.status(500).json(error);
  }
};

// delete user

export async function deleteUser (req, res) {
  const {id} = req.params;
  try {
    const findById = findById(id);
    if(!findById) return res.status(404).send('user not found');
    await Users.findByIdAndDelete(id);
    return res.status(200).send('deleted');
  } catch (error) {
    return res.status(500).json({error})
    
  }
   
}
