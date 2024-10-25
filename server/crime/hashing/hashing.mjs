import bcrypt from 'bcrypt'

const saltRound = 10;
export const hashpassword = (password) =>{
  const salt = bcrypt.genSaltSync(saltRound);
  return bcrypt.hashSync(password, salt);
}

// hash password

export const comparePassword = (plain, compared) => {
 return bcrypt.compareSync(plain, compared)
}