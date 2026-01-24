import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, // un carrito activo por usuario
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

export const Cart = mongoose.model("Cart", cartSchema);
