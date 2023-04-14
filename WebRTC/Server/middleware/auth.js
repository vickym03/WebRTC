const jwt = require("jsonwebtoken");

module.exports = async (request, response, next) => {
  try {
    const token = await request.headers.authorization.split(" ")[1];
    // const token = req.body.token || req.query.token || req.headers['x-access-token']

    //check if the token matches the supposed origin
    const decodedToken = await jwt.verify(
      token,
      "RANDOM-TOKEN"
    );

    // retrieve the user details of the logged in user
    const user = await decodedToken;


    // pass the the user down to the endpoints here
    request.user = user;


    // pass down functionality to the endpoint
    next();


  } catch (error) {
    response.status(401).json({
      error: "401 Unauthorized response !",
    });
  }
}
