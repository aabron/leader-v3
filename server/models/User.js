import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        userEmail: {
            type: String,
            require: true,
            max: 100,
            unique: true,
        },
        userPassword: {
            type: String,
            require: true,
            min: 10,
        },
        userBrokerage: String,
        userLocation: String,
    },
    {timestamps: true}
);

const User = mongoose.model("User", UserSchema);
export default User;