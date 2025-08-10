import { Schema } from "mongoose";

const sessionSchema = new Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        title:{
            type: String,
            required: true,
        },
        tags: {
            type: String,
        },
        json_file_url: {
            type: String,
            
        },
        status:{
            type: String,
            enum: ["draft","published"],
            default: "draft",
        }
    },
    {
        timestamps: true,
    }
)