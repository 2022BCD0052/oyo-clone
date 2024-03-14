// import connectDB from "@/db";
// import User from "@/models/user-models";
// import { bcrypt } from "bcrypt";
// import jwt from "jsonwebtoken";

// export default async function handler(req, res) {
  

//     if (req.method === "POST")  
//     connectDB();
//      {
//         const { name, email, password } = req.body;
        
//         // Checking for required fields
//         if(!name || !email || !password)
//         {
//             res.status(400).json({msg: "Please enter all fields"}).maxTimeMS(3000);
//         } 
        
//         const emailExists = await User.findOne({email: email});
//         if(emailExists)
//         {
//             res.status(400).json({msg: "Email already exists"});
//         }

//         const hashPassword = await bcrypt.hash(password, 10);

//         const newUser = new User({
//             name,
//             email,
//             password : hashPassword,
//         });

//         const result = await newUser.save();
//         const token = jwt.sign({token: result._id},'code_AJ',{expiresIn: "30d",});
//         return res.status(201).json({msg: "User registered successfully", token});

//     }
    

// }