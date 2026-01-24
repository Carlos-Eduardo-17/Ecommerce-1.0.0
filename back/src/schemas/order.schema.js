import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    status: {
      type: String,
      enum: ["PENDING", "PAGADO", "LISTO", "CANCELADO"],
      default: "PENDING",
    },

    coupon: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coupon",
      default: null,
    },

    subtotal: {
      type: Number,
      required: true,
      min: 0,
    },

    discountTotal: {
      type: Number,
      default: 0,
      min: 0,
    },

    total: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true, // createdAt + updatedAt
  }
);

export const Order = mongoose.model("Order", orderSchema);
