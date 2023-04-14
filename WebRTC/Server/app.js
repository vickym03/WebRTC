const express = require("express");
const cors = require('cors');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authentication = require("./middleware/auth")
const {userModel} = require("./model/index")
const dbConnect = require("./config/dbConnect")
// const userRouter = require("./routes/index")
const morgan = require("morgan");


//use express
const app = express();
app.use(express.json());

//cors
app.use(cors());

//Data_base
dbConnect()



// /* APIs  */

// app.use("/",userRouter)


app.set('trust proxy', true)
app.use(morgan('dev', {
  skip: function (req, res) { return res.statusCode < 400 }
}))


// app.use(morgan('logger', { stream: accessLogStream }));


app.post("/register", (request, response) => {

    //The code above is telling bcrypt to hash the password received from request body 10 times or 10 salt rounds.
    bcrypt.hash(request.body.password, 10)
        .then((hashedPassword) => {
            const user = new userModel({
                email: request.body.email,
                password: hashedPassword,
            });

            user.save()
                .then((result) => {
                    console.log("result", result)
                    response.status(201).send({
                        message: "user Created Successfully",
                        result: result,
                    })
                })

                .catch((data) => {
                    response.status(200).send({
                        message: "user already exists",
                        data: data.keyValue.email,
                    })
                })
        })
        .catch((error) => {
            response.status(404).send({
                message: "Password was not hashed successfully",
                error: error
            })
        })

});

app.post("/login", (request, response) => {
    console.log("request.body", request.body)

    // check if email exists
    userModel.findOne({ email: request.body.email })

        // if email exists
        .then((user) => {
            // compare the password entered and the hashed password found
            bcrypt
                .compare(request.body.password, user.password)

                // if the passwords match
                .then((passwordCheck) => {

                    // check if password matches
                    if (!passwordCheck) {
                        return response.status(404).send({
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



                    console.log("Access token:", token)
                    //   return success response
                    response.status(200).send({
                        data: {
                            message: "Login Successful",
                            email: user.email,
                            access_token: token,

                        }
                    });
                })
                // catch error if password does not match
                .catch((error) => {
                    response.status(404).send({
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

app.get('/users', (request, response) => {

    userModel.find({}, { _id: 1, email: 1 }).then((data) => {

        console.log("newArray", data)

        response.status(200).send({
            message: "user fetched Successfully",
            data: data
        })
    }).catch((error) => {
        response.status(404).send({
            message: "Failed to fetch user",
            error: error
        });
    })

})






module.exports = app;



