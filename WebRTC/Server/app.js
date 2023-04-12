const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authentication = require("./middleware/auth")

// const userRouter = require("./routes/index")



const User = require("./model/userModel");
const dbConnect = require('./config/dbConnect')

const app = express();

app.use(express.json());

dbConnect()



// APIs 

// app.use("/WebRTC/user",userRouter)


app.post("/register", (request, response) => {

    //The code above is telling bcrypt to hash the password received from request body 10 times or 10 salt rounds.
    bcrypt.hash(request.body.password, 10)
        .then((hashedPassword) => {
            const user = new User({
                email: request.body.email,
                password: hashedPassword,
            });
            User.findOne({ email: request.body.email })
            user.save()
                .then((result) => {
                    console.log("result", result)
                    response.status(201).send({
                        message: "User Created Successfully",
                        result: result,
                    })
                })

                .catch((data) => {
                    response.status(500).send({
                        message: "user present",
                        data: data.keyValue.email,
                    })
                })
        })
        .catch((error) => {
            response.status(500).send({
                message: "Password was not hashed successfully",
                error: error
            })
        })

});

app.post("/login", (request, response) => {
    console.log("request.body", request.body)

    // check if email exists
    User.findOne({ email: request.body.email })

        // if email exists
        .then((user) => {
            // compare the password entered and the hashed password found
            bcrypt
                .compare(request.body.password, user.password)

                // if the passwords match
                .then((passwordCheck) => {

                    // check if password matches
                    if (!passwordCheck) {
                        return response.status(400).send({
                            message: "Passwords does not match",
                            error: error
                        });
                    }

                    //   create JWT token
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: "15m" }
                    );
                    console.log("token:", token)
                    //   return success response
                    response.status(200).send({
                        data: {
                            message: "Login Successful",
                            email: user.email,
                            token: token
                        }
                    });
                })
                // catch error if password does not match
                .catch((error) => {
                    response.status(400).send({
                        message: "Passwords does not match",
                        error: error
                    });
                });
        })
        // catch error if email does not exist
        .catch((error) => {
            response.status(404).send({
                message: "Email not found",
                error: error
            });
        });
});

// authentication





module.exports = app;