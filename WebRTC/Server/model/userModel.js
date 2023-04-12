const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, 
          require: [true, "Please enter the mail id"], 
          unique: [true, "Email Exist"] 
        },

  password: { type: String, 
              require: [true, "Please enter the  password"], 
              unique: false 
            },
});

/*
create a user table or collection if there is no table with that name already"
The user collection is now ready to receive the data that is to be passed to it
*/

// module.exports = mongoose.model("users", userSchema);
module.exports = mongoose.model.Users || mongoose.model("Users", userSchema);
