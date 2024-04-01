import mongoose from 'mongoose';

// Defining the schema for users
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetToken: { type: String },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,// Adding timestamps to the user schema
  }
);

// Creating a model named 'User' based on the user schema
const User = mongoose.model('User', userSchema);
// Exporting the User model for use in other files
export default User;
