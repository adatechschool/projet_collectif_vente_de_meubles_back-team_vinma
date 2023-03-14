const mongoose = require('mongoose');

const User = mongoose.model("User", {
    name: String,
    lastName: String,
    nickName: String,
    email: {
        required: true,
        unique: true,
        type: String,
    },
    address: String,
    phoneNumber: Number,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        }
    ],
    profilePicture: String,
    password: String,
    // salt: String,
    // hash: String,
    admin: Number,
    token: String,
});

module.exports = User;