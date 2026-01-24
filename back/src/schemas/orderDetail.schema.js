import mongoose from "mongoose";

const orderDetailSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },

    titleSnapshot: {
      type: String,
      required: true,
    },

    priceSnapshot: {
      type: Number,
      required: true,
      min: 0,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

export const OrderDetail = mongoose.model("OrderDetail", orderDetailSchema);
