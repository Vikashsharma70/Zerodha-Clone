const {UserModel} = require("../models/UserModel.js");

const { createSecretToken } = require("../utils/createSecretToken.js");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const user = await UserModel.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in  successfully", success: true, user });
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports.Login = async (req,res,next) =>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({message:"Please enter both email and password"})

        }
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid email or password"})

        }
        const auth = await bcrypt.compare(password,user.password)
        if(!auth){
            return res.status(400).json({message:"Invalid email or password"})

        }

        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        })
        res.status(200).json({message:"User logged in successfully",success:true,user})
        next()
    }catch(err){
        console.log(err);
    }
}
