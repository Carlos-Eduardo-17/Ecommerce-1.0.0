import mongoose from "mongoose";

const itemCartSchema = new mongoose.Schema(
  {
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
      required: true,
    },

    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

// Un libro no se repite dentro del mismo carrito
itemCartSchema.index({ cart: 1, book: 1 }, { unique: true });

export const ItemCart = mongoose.model("ItemCart", itemCartSchema);
