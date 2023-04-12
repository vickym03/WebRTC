// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const authentication = require("../middleware/auth")
// const User = require("../model/userModel");
// const express = require("express");
// const userRouter  = express.Router()

// // app.use(express.json());



// // const app = express();





// userRouter.post("/register", (request, response) => {

//     //The code above is telling bcrypt to hash the password received from request body 10 times or 10 salt rounds.
//     bcrypt.hash(request.body.password, 10)
//         .then((hashedPassword) => {
//             const user = new User({
//                 email: request.body.email,
//                 password: hashedPassword,
//             });

//             user.save()
//                 .then((result, error) => {
//                     if (result) {
//                         response.status(201).send({
//                             message: "User Created Successfully",
//                             result: result,
//                         })
//                     } else if (error) {
//                         response.status(401).send({
//                             message: "User Created Successfully",
//                             error: error,
//                         })
//                     }
//                 })

//                 .catch((error) => {
//                     response.status(500).send({
//                         message: "user present",
//                         error: error.keyValue.email,
//                     })
//                 })



//         })
//         .catch((error) => {
//             response.status(500).send({
//                 message: "Password was not hashed successfully",
//                 error: error
//             })
//         })

// });

// userRouter.post("/login", (request, response) => {
//     console.log("request.body",request.body)

//     // check if email exists
//     User.findOne({ email: request.body.email })

//         // if email exists
//         .then((user) => {
//             // compare the password entered and the hashed password found
//             bcrypt
//                 .compare(request.body.password, user.password)

//                 // if the passwords match
//                 .then((passwordCheck) => {

//                     // check if password matches
//                     if (!passwordCheck) {
//                         return response.status(400).send({
//                             message: "Passwords does not match",
//                             error: error
//                         });
//                     }

//                     //   create JWT token
//                     const token = jwt.sign(
//                         {
//                             userId: user._id,
//                             userEmail: user.email,
//                         },
//                         "RANDOM-TOKEN",
//                         { expiresIn: "15m" }
//                     );
//                     console.log("token:", token)
//                     //   return success response
//                     response.status(200).send({
//                         data: {
//                             message: "Login Successful",
//                             email: user.email,
//                             token: token
//                         }
//                     });
//                 })
//                 // catch error if password does not match
//                 .catch((error) => {
//                     response.status(400).send({
//                         message: "Passwords does not match",
//                         error: error
//                     });
//                 });
//         })
//         // catch error if email does not exist
//         .catch((error) => {
//             response.status(404).send({
//                 message: "Email not found",
//                 error: error
//             });
//         });
// });