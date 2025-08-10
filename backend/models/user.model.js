import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    try{
        const salt=await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }
    catch(error){
        next(error);
    }
});

userSchema.methods.matchPassword = async function(enteredpassword){
    const isPasswordCorrect = await bcrypt.compare(enteredpassword, this.password);
    return isPasswordCorrect;
}

export const User = model("User", userSchema);