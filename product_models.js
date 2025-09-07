import mongoose from "mongoose";

const blogModel = mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Info: {
        type: String,
        required: true
    },
}, {
    timestamps: true  // Optional: adds createdAt and updatedAt fields
});

const blog = mongoose.model("Blog", blogModel);

export default blog;









