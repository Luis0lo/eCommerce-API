import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, requerid: true},
    lastname: { type: String, requerid: true},
    username: { type: String, requerid: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: { type: String },
    // cartId: { type: String, default: 'pending' },
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
