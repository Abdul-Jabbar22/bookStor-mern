import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true, // Ensure that email is marked as required
    unique: true, // This will ensure emails are unique in the database
    trim: true, // Removes leading and trailing spaces
    lowercase: true, // Converts email to lowercase
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Example: require at least 6 characters
  },
});

const User = mongoose.model("User", userSchema);

export default User;
